import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable()
export class RegistrationService {

  // constructor(private http: HttpClient) {}

  // createUser(data: User): Observable<User> {
  //   const body = JSON.stringify(data);
  //   return this.http.post<User>('', body);
  // }
}
