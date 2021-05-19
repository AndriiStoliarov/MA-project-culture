import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse, Login } from '../types';

@Injectable({providedIn: 'root'})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  AUTH_URL = 'http://52.57.253.240:3000/api/auth';

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(login: Login): Observable<AuthResponse> {
    return this.http.post(this.AUTH_URL, login).pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))
    );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const message = error.error.error;
    // console.log(message);
    console.log(message);

    switch (message) {
      case 'Invalid email or password.':
        this.error$.next('Невірна адреса електронної пошти або пароль.');
        break;
    }

    return throwError(error);
  }

  private setToken(response: AuthResponse | null): void {
    // console.log();
    console.log(response);
    if (response) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('firstName', response.user.first_name);
      localStorage.setItem('lastName', response.user.last_name);
      localStorage.setItem('currentUserId', response.user.id.toString());
    } else {
      localStorage.clear();
    }

  }
}
