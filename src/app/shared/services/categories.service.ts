import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../types';

@Injectable({ providedIn: 'root' })
export class CategoriesService {

  ROOT_URL = 'http://52.57.253.240:3000/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ROOT_URL).pipe(
      map((response) => response)
    );
  }

}
