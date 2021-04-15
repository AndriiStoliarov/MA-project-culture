import { Routes } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';

export const userRouting: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      {path: '', redirectTo: '/user/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'posts', component: UserPostsPageComponent},
      {path: 'event', component: EventFormComponent},
    ]
  }
];

