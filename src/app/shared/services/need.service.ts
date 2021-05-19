
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Proposal } from '../types';

@Injectable({ providedIn: 'root' })
export class NeedService {
  ROOT_URL = 'http://52.57.253.240:3000/api/proposals';

  constructor(private http: HttpClient) { }

  postData(data: Proposal): Observable<any> {
    const body = JSON.stringify(data);

    return this.http.post<Proposal>(this.ROOT_URL, body);
  }

}
