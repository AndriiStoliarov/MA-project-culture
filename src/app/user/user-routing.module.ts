import { Routes } from '@angular/router';
import { EventFormComponent } from './shared/components';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { AuthGuard } from './shared/guards';

export const userRouting: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      {path: '', redirectTo: '/user/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'posts', component: UserPostsPageComponent, canActivate: [AuthGuard]},
      {path: 'event', component: EventFormComponent , canActivate: [AuthGuard]},
    ]
  }
];

