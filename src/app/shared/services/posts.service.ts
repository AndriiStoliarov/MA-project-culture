import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { Post, Records } from '../types';

@Injectable({ providedIn: 'root' })
export class PostsService {
  post$: BehaviorSubject<Post> = new BehaviorSubject<Post>(null);

  ROOT_URL = 'http://52.57.253.240:3000/api/events';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Records> {
    return this.http.get<Records>(this.ROOT_URL).pipe(
      map((response) => response),
      // delay(500)
      delay(500),
    );
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}.json`).pipe(
      map((post: Post) => post),
      tap((post: Post) => this.post$.next(post)),
      // delay(500)
      delay(500),
    );
  }

}
