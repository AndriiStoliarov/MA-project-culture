import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types';
import { delay, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts(id: number): Observable<Post> {
    return this.http.get<Post>(`http://52.57.253.240:3000/api/events/${id}`).pipe(
      map((response) => response),
      delay(500)
    );
  }
}
