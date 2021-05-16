import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  ROOT_URL = 'http://52.57.253.240:3000/api/users';

  constructor(private http: HttpClient) {}

  createUser(data: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json'
      })
    };

    const body = JSON.stringify(data);

    return this.http.post<User>(this.ROOT_URL, body, httpOptions);
  }
}
