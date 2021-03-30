import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types';

@Injectable()
export class PostsService {

  // constructor(private http: HttpClient) {}

  // getPosts(): Observable<Post[]> {
  //   return this.http.get(`${}/posts.json`).pipe();
  // }
}
