import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Records } from '../types';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
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
      map((response) => response),
      // delay(500)
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

    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.5rkd4zXemzKWHF9i-VylcjH_ll306bU7wDVrFk52BRA'
      })
    };

    return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}.json`, httpOptions).pipe(
      map((post: Post) => post),
      // delay(500)
      delay(500)
    );
  }

}
