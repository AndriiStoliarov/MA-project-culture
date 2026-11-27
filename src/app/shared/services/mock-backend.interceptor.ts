import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  AuthResponse,
  Category,
  Post,
  Proposal,
  Records,
  User,
} from '../types';

interface StoredUser extends User {
  password?: string;
}

const STORAGE_KEYS = {
  POSTS: 'mock_culture_posts_v1',
  CATEGORIES: 'mock_culture_categories_v1',
  USERS: 'mock_culture_users_v1',
};

const DEFAULT_CATEGORIES: Category[] = [
  { id: 1, name: 'Виставка' },
  { id: 2, name: 'Концерт' },
  { id: 3, name: 'Вистава' },
  { id: 4, name: 'Навчання' },
  { id: 5, name: 'Зустріч' },
  { id: 6, name: 'Свято' },
  { id: 7, name: 'Інше' },
];

const DEFAULT_USERS: StoredUser[] = [
  {
    id: 1,
    first_name: 'Олена',
    last_name: 'Коваленко',
    email: 'demo@culture.local',
    password: 'demo',
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
        proposals: [
          {
            request_id: '101',
            description: 'Можу допомогти з друком і монтажем',
            price_cents: 1500,
            phone_number: '0501234567',
          },
        ],
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
  {
    id: 4,
    title: 'Благодійний маркет локальних ремісників',
    body: 'Ярмарок кераміки, текстилю та авторських листівок на підтримку міських культурних ініціатив.',
    starts_at: Date.now() + 86400000 * 5,
    location: 'Міський сквер біля фонтану',
    category_id: 4,
    category: { id: 4, name: 'Волонтерство та події' },
    image_url:
      'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 103,
        description: 'Потрібні волонтери для координації учасників на локації',
        proposals: [],
      },
    ],
  },
  {
    id: 5,
    title: 'Експозиція плівкової міської фотографії',
    body: 'Серія чорно-білих та кольорових знімків про повсякденну архітектуру та світло ранкового міста.',
    starts_at: Date.now() + 86400000 * 12,
    location: 'Фотопростір «Кадр»',
    category_id: 1,
    category: { id: 1, name: 'Виставки та арт' },
    image_url:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 104,
        description: 'Шукаємо рамки формату А3 на тимчасову експозицію',
        proposals: [],
      },
    ],
  },
  {
    id: 6,
    title: 'Вечір камерного джазу при свічках',
    body: 'Імпровізаційна програма фортепіано, контрабаса та саксофона у затишній залі з живою акустикою.',
    starts_at: Date.now() + 86400000 * 14,
    location: 'Мала філармонійна зала',
    category_id: 2,
    category: { id: 2, name: 'Музика та концерти' },
    image_url:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [],
  },
  {
    id: 7,
    title: 'Пластичний перформанс «Ритм простору»',
    body: 'Експериментальна постановка на межі сучасного танцю та візуальної інсталяції.',
    starts_at: Date.now() + 86400000 * 16,
    location: 'Арт-кластер «Цех»',
    category_id: 3,
    category: { id: 3, name: 'Театр та перформанс' },
    image_url:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 105,
        description: 'Потрібен світлооператор з досвідом роботи на сцені',
        proposals: [],
      },
    ],
  },
  {
    id: 8,
    title: 'Толока та оновлення відкритої бібліотеки',
    body: 'Спільне впорядкування вуличних книжкових полиць, фарбування лавок та сортування подарованих видань.',
    starts_at: Date.now() + 86400000 * 18,
    location: 'Парк культури, головна алея',
    category_id: 4,
    category: { id: 4, name: 'Волонтерство та події' },
    image_url:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 106,
        description: 'Потрібні пензлі, фарба по дереву та робочі рукавички',
        proposals: [],
      },
    ],
  },
  {
    id: 9,
    title: 'Відкрита майстерня з ліногравюри',
    body: 'Практичний воркшоп для початківців: від ескізу на лінолеумі до першого відбитка на папері.',
    starts_at: Date.now() + 86400000 * 21,
    location: 'Майстерня «Відбиток»',
    category_id: 1,
    category: { id: 1, name: 'Виставки та арт' },
    image_url:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
    user_id: 1,
    status: 'active',
    requests: [
      {
        id: 107,
        description: 'Шукаємо друкарський валик та бавовняний папір',
        proposals: [],
      },
    ],
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

    // 1. Події / пости: список і деталі по id
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
      const email = (body?.email || '').trim().toLowerCase();
      const password = body?.password || '';

      const foundUser = users.find(
        (u) => u.email.trim().toLowerCase() === email,
      );

      if (
        !foundUser ||
        (foundUser.password && foundUser.password !== password)
      ) {
        return this.respondError(401, 'Invalid email or password.');
      }

      const publicUser = this.toPublicUser(foundUser);
      const authResponse: AuthResponse = {
        token: `mock-jwt-token-${publicUser.id}`,
        user: publicUser,
      };
      return this.respond(authResponse);
    }

    if (req.method === 'GET' && cleanPath === '/api/me') {
      const users = this.getUsers();
      const currentUser = this.resolveUserFromToken(users);
      if (!currentUser) {
        return this.respondError(401, 'Unauthorized');
      }
      return this.respond({ user: this.toPublicUser(currentUser) });
    }

    // 4. Реєстрація користувача
    if (req.method === 'POST' && cleanPath === '/api/users') {
      const users = this.getUsers();
      const email = (body?.email || '').trim().toLowerCase();

      if (!email) {
        return this.respondError(400, 'Email is required.');
      }

      const exists = users.some((u) => u.email.trim().toLowerCase() === email);
      if (exists) {
        return this.respondError(400, 'User with this email already exists.');
      }

      const nextId = users.reduce((max, u) => Math.max(max, u.id), 0) + 1;
      const newUser: StoredUser = {
        id: nextId,
        first_name: (body?.first_name || '').trim() || 'Користувач',
        last_name: (body?.last_name || '').trim() || `#${nextId}`,
        email,
        password: body?.password || '',
      };

      users.push(newUser);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      return this.respond(this.toPublicUser(newUser), 201);
    }

    if (req.method === 'POST' && cleanPath === '/api/events') {
      const posts = this.getPosts();
      const categories = this.getCategories();
      const currentUser = this.resolveUserFromToken(this.getUsers());

      const nextPostId =
        posts.reduce((max, p) => Math.max(max, Number(p.id) || 0), 0) + 1;

      const maxReqId = posts.reduce((max, p) => {
        const reqMax = (p.requests || []).reduce(
          (rMax, r) => Math.max(rMax, Number(r.id) || 0),
          100,
        );
        return Math.max(max, reqMax);
      }, 100);

      const categoryId = Number(body?.category_id) || 7;
      const matchedCategory = categories.find((c) => c.id === categoryId) ||
        categories[categories.length - 1] || { id: categoryId, name: 'Інше' };

      const rawRequirements = Array.isArray(body?.requests_attributes)
        ? body.requests_attributes
        : [];
      const requests = rawRequirements
        .map((item: any, idx: number) => ({
          id: maxReqId + idx + 1,
          description: (item?.description || '').trim(),
          proposals: [] as Proposal[],
        }))
        .filter((reqItem: any) => reqItem.description.length > 0);

      const uploadedImage =
        typeof body?.image?.data === 'string' && body.image.data.length > 0
          ? body.image.data
          : '';

      const parsedDate =
        typeof body?.starts_at === 'number'
          ? body.starts_at
          : Date.parse(body?.starts_at) || Date.now() + 86400000 * 7;

      const newPost: Post = {
        id: nextPostId,
        title: (body?.title || '').trim() || `Подія #${nextPostId}`,
        body: (body?.body || '').trim(),
        starts_at: parsedDate,
        location: (body?.location || '').trim(),
        category_id: categoryId,
        category: matchedCategory,
        image_url:
          uploadedImage ||
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
        user_id: currentUser ? currentUser.id : 1,
        status: 'active',
        requests,
      };

      posts.unshift(newPost);
      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
      return this.respond(newPost, 201);
    }

    // 5. Відгуки / пропозиції до потреб (/api/proposals)
    if (req.method === 'POST' && cleanPath === '/api/proposals') {
      const posts = this.getPosts();
      const requirementId = Number(body?.requirement_id ?? body?.request_id);
      const newProposal: Proposal = {
        request_id:
          body?.request_id !== undefined && body?.request_id !== null
            ? String(body.request_id)
            : undefined,
        description:
          body?.description ||
          body?.body ||
          body?.proposal ||
          'Відгук на потребу',
        price_cents: Number(body?.price_cents ?? 0),
        phone_number: String(body?.phone_number || ''),
      };

      let updated = false;
      for (const post of posts) {
        if (!Array.isArray(post.requests)) {
          continue;
        }
        const targetReq = post.requests.find((r) => r.id === requirementId);
        if (targetReq) {
          targetReq.proposals = targetReq.proposals || [];
          targetReq.proposals.push(newProposal);
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
        posts[0].requests[0].proposals.push(newProposal);
      }

      localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
      return this.respond({ ok: true, proposal: newProposal }, 201);
    }

    return next.handle(req);
  }

  private respond<T>(payload: T, status = 200): Observable<HttpEvent<T>> {
    return of(new HttpResponse<T>({ status, body: payload })).pipe(delay(150));
  }

  private respondError(status: number, message: string): Observable<never> {
    return throwError(
      new HttpErrorResponse({
        status,
        statusText: message,
        error: { message },
      }),
    );
  }

  private toPublicUser(user: StoredUser): User {
    const { password, ...publicUser } = user;
    return publicUser;
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

  private getUsers(): StoredUser[] {
    this.ensureSeedData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
  }

  private resolveUserFromToken(users: StoredUser[]): StoredUser | undefined {
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
