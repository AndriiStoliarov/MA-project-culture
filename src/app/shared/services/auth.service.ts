import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthResponse, LoginParams, User, UserResponse } from '../types';

@Injectable()
export class AuthService {
  HOST = 'http://52.57.253.240:3000';
  AUTH_URL = '/api/auth';
  USER_URL = '/api/me';
  LOCAL_STORAGE_TOKEN_KEY = 'token';

  error$: Subject<string> = new Subject<string>();

  authToken: string;
  user: User;

  private response: AuthResponse;

  constructor(private http: HttpClient) {
    this.authToken = this.tokenFromLocalStorage;
  }

  get tokenFromLocalStorage() {
    return localStorage.getItem(this.LOCAL_STORAGE_TOKEN_KEY);
  }

  login(params: LoginParams): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.HOST}${this.AUTH_URL}`, params)
      .pipe(
        tap((response) => {
        this.setToken(response);
        },
        catchError(this.handleError.bind(this)),
      ));
  }

  logout(): void {
    localStorage.clear();
    this.user = null;
    this.response = null;
    this.authToken = null;
  }

  isAuthenticated(): boolean {
    return !!this.authToken;
  }

  getUserByToken() {
    return this.http.get<UserResponse>(`${this.HOST}${this.USER_URL}`).pipe(
      tap((response) => {
        this.user = response.user;
      }),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const message = error.error.error;
    console.log(message);

    switch (message) {
      case 'Invalid email or password.':
        this.error$.next('Невірна адреса електронної пошти або пароль.');
        break;
    }

    return throwError(error);
  }

  private setToken(response: AuthResponse | null): void {
    console.log('setToken', response);
    if (response) {
      localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, response.token);
    } else {
      localStorage.clear();
    }

    this.response = response;
    this.user = response?.user;
    this.authToken = response?.token;
  }
}
