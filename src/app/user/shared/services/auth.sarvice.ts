import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse, Login } from '../types';

@Injectable({providedIn: 'root'})
export class AuthService {

  AUTH_URL = 'http://52.57.253.240:3000/api/auth';

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(login: Login): Observable<AuthResponse> {
    return this.http.post(this.AUTH_URL, login).pipe(
      tap(this.setToken)
    );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: AuthResponse | null): void {
    // console.log();
    console.log(response);
    if (response) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('firstName', response.user.first_name);
      localStorage.setItem('lastName', response.user.last_name);
    } else {
      localStorage.clear();
    }

  }
}
