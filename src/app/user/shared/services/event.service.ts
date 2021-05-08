
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../types';

@Injectable({providedIn: 'root'})
export class EventService {
  ROOT_URL = 'http://52.57.253.240:3000/api/events';

  constructor(private http: HttpClient) {
  }

  postData(data: Event): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.5rkd4zXemzKWHF9i-VylcjH_ll306bU7wDVrFk52BRA'
      })
    };

    // const headers = {Authentication: '555'}; , {headers: headers}

    const body = JSON.stringify(data);
    return this.http.post<Event>(this.ROOT_URL, body, httpOptions);
  }

}
