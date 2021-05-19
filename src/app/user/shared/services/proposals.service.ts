import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProposalsResponse } from '../types';

@Injectable({ providedIn: 'root' })
export class ProposalsService {

  ROOT_URL = 'http://52.57.253.240:3000/api/proposals';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ProposalsResponse[]> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.get<ProposalsResponse[]>(this.ROOT_URL, httpOptions).pipe(
      map((response) => response)
    );
  }

}
