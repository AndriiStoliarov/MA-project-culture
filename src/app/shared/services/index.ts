import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { UserResolverService } from './user.resolver';

export const mainServices = [
  AuthService,
  UserResolverService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

export * from './auth.service';
export * from './auth.interceptor';
export * from './categories.service';
export * from './need.service';
export * from './posts.service';
export * from './registration.service';
export * from './user.resolver';
