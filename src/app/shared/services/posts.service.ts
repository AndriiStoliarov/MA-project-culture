import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types';
import { Records } from '../types';
import { delay, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  ROOT_URL = 'http://52.57.253.240:3000/api/events';

  constructor(private http: HttpClient) {}

  // getPosts(id: number): Observable<Post> {
  //   return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}`).pipe(
  //     map((response) => response),
  //     delay(500)
  //   );
  // }

  getPosts(): Observable<Records> {
    return this.http.get<Records>(this.ROOT_URL).pipe(
      map(( response ) => response),
      delay(500)
    );
  }

  // getById(id: number): Observable<Post> {
  //   return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}.json`).pipe(
  //     map((post: Post) => {
  //       return {
  //         ...post, id,
  //         date: new Date(post.starts_at)
  //       };
  //     }),
  //     delay(500)
  //   );
  // }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}.json`).pipe(
      map((post: Post) => post),
      delay(500)
    );
  }

}
