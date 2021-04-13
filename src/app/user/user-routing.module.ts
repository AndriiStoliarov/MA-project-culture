import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';

export const userRouting: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      {path: '', redirectTo: '/user/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent}
    ]
  }
];

