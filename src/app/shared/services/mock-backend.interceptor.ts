import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AuthResponse, Category, Post, Records, User } from '../types';

const STORAGE_KEYS = {
  POSTS: 'mock_culture_posts_v1',
  CATEGORIES: 'mock_culture_categories_v1',
  USERS: 'mock_culture_users_v1',
};

const DEFAULT_CATEGORIES: Category[] = [
  { id: 1, name: 'Виставки та арт' },
  { id: 2, name: 'Музика та концерти' },
  { id: 3, name: 'Театр та перформанс' },
  { id: 4, name: 'Волонтерство та події' },
];

const DEFAULT_USERS: User[] = [
  {
    id: 1,
    first_name: 'Олена',
    last_name: 'Коваленко',
    email: 'demo@culture.local',
  },
];

const DEFAULT_POSTS: Post[] = [
  {
    id: 1,
    title: 'Вечір сучасної української графіки',
    body: 'Камерна виставка робіт молодих ілюстраторів та графіків з обговоренням процесу створення серій.',
    starts_at: Date.now() + 86400000 * 3,
    location: 'Центральна галерея, зал 2',
    category_id: 1,
    category: { id: 1, name: 'Виставки та арт' },
    image_url:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 101,
        description: 'Потрібна допомога з підготовкою етикеток та навігації',
        proposals: ['Можу допомогти з друком і монтажем'],
      },
    ],
  },
  {
    id: 2,
    title: 'Акустичний джем у внутрішньому дворику',
    body: 'Відкрита музична зустріч для локальних виконавців та слухачів на свіжому повітрі.',
    starts_at: Date.now() + 86400000 * 7,
    location: 'Арт-дворик, вул. Шевченка, 14',
    category_id: 2,
    category: { id: 2, name: 'Музика та концерти' },
    image_url:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 102,
        description: 'Шукаємо звукорежисера на вечірній сет',
        proposals: [],
      },
    ],
  },
  {
    id: 3,
    title: 'Читання сучасної драми та обговорення',
    body: 'Читання п’єс по ролях у теплому колі з подальшою відкритою розмовою про текст і постановку.',
    starts_at: Date.now() + 86400000 * 10,
    location: 'Культурний простір «Сцена»',
    category_id: 3,
    category: { id: 3, name: 'Театр та перформанс' },
    image_url:
      'https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [],
  },
];

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  constructor() {
    this.ensureSeedData();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const isLegacyApi =
      req.url.includes('52.57.253.240:3000/api/') || req.url.includes('/api/');
    if (!isLegacyApi) {
      return next.handle(req);
    }

    const cleanPath = req.url
      .replace(/^https?:\/\/[^/]+/, '')
      .replace(/\.json(\?.*)?$/, '')
      .split('?')[0];

    const body =
      typeof req.body === 'string' ? this.safeParseJson(req.body) : req.body;

    // 1. Події / пости: список и детали по id
    if (req.method === 'GET' && cleanPath === '/api/events') {
      const records: Records = { records: this.getPosts() };
      return this.respond(records);
    }

    const eventIdMatch = cleanPath.match(/^\/api\/events\/(\d+)$/);
    if (req.method === 'GET' && eventIdMatch) {
      const id = Number(eventIdMatch[1]);
      const post =
        this.getPosts().find((item) => item.id === id) || this.getPosts()[0];
      return this.respond(post);
    }

    // 2. Категорії
    if (req.method === 'GET' && cleanPath === '/api/categories') {
      return this.respond(this.getCategories());
    }

    // 3. Авторизація та поточний користувач
    if (req.method === 'POST' && cleanPath === '/api/auth') {
      const users = this.getUsers();
      const email = body?.email || users[0].email;
      const foundUser = users.find((u) => u.email === email) || users[0];
      const authResponse: AuthResponse = {
        token: `mock-jwt-token-${foundUser.id}`,
        user: foundUser,
      };
      return this.respond(authResponse);
    }

    if (req.method === 'GET' && cleanPath === '/api/me') {
      const users = this.getUsers();
      const currentUser = this.resolveUserFromToken(users) || users[0];
      return this.respond({ user: currentUser });
    }

    // 4. Реєстрація користувача
    if (req.method === 'POST' && cleanPath === '/api/users') {
      const users = this.getUsers();
      const nextId = users.reduce((max, u) => Math.max(max, u.id), 0) + 1;
      const newUser: User = {
        id: nextId,
        first_name: body?.first_name || 'Гість',
        last_name: body?.last_name || 'Порталу',
        email: body?.email || `user${nextId}@culture.local`,
      };
      users.push(newUser);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      return this.respond(newUser, 201);
    }

    // 5. Відгуки / пропозиції до потреб (/api/proposals)
    if (req.method === 'POST' && cleanPath === '/api/proposals') {
      const posts = this.getPosts();
      const requirementId = Number(body?.requirement_id ?? body?.request_id);
      const proposalText =
        body?.description ||
        body?.body ||
        body?.proposal ||
        'Відгук на потребу';

      let updated = false;
      for (const post of posts) {
        if (!Array.isArray(post.requests)) {
          continue;
        }
        const targetReq = post.requests.find((r) => r.id === requirementId);
        if (targetReq) {
          targetReq.proposals = targetReq.proposals || [];
          targetReq.proposals.push(proposalText);
          updated = true;
          break;
        }
      }

      if (!updated && posts.length > 0) {
        posts[0].requests = posts[0].requests || [];
        if (posts[0].requests.length === 0) {
          posts[0].requests.push({
            id: 999,
            description: 'Загальна потреба події',
            proposals: [],
          });
        }
        posts[0].requests[0].proposals = posts[0].requests[0].proposals || [];
        posts[0].requests[0].proposals.push(proposalText);
      }

      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
      return this.respond({ ok: true, proposal: proposalText }, 201);
    }

    return next.handle(req);
  }

  private respond<T>(payload: T, status = 200): Observable<HttpEvent<T>> {
    return of(new HttpResponse<T>({ status, body: payload })).pipe(delay(150));
  }

  private ensureSeedData(): void {
    if (!localStorage.getItem(STORAGE_KEYS.POSTS)) {
      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(DEFAULT_POSTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      localStorage.setItem(
        STORAGE_KEYS.CATEGORIES,
        JSON.stringify(DEFAULT_CATEGORIES),
      );
    }
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
  }

  private getPosts(): Post[] {
    this.ensureSeedData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.POSTS) || '[]');
  }

  private getCategories(): Category[] {
    this.ensureSeedData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || '[]');
  }

  private getUsers(): User[] {
    this.ensureSeedData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
  }

  private resolveUserFromToken(users: User[]): User | undefined {
    const token = localStorage.getItem('token') || '';
    const match = token.match(/mock-jwt-token-(\d+)/);
    if (!match) {
      return undefined;
    }
    const id = Number(match[1]);
    return users.find((u) => u.id === id);
  }

  private safeParseJson(raw: string): any {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
}
