import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../../../shared/types';

@Injectable({ providedIn: 'root' })
export class EventService {
  ROOT_URL = 'http://52.57.253.240:3000/api/events';

  constructor(private http: HttpClient) { }

  postData(data: Event): Observable<any> {
    const body = JSON.stringify(data);

    return this.http.post<Event>(this.ROOT_URL, body);
  }

}
