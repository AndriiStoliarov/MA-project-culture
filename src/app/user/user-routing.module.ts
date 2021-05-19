import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { EventFormComponent } from './shared/components';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { AuthGuard } from './shared/guards';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';

export const userRouting: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      {path: '', redirectTo: '/user/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'posts', component: UserPostsPageComponent, canActivate: [AuthGuard]},
      {path: 'event', component: EventFormComponent , canActivate: [AuthGuard]},
    ],
  },
];

