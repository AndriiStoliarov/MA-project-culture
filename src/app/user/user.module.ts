import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventFormComponent, UserLayoutComponent } from './shared/components';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { userRouting } from './user-routing.module';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    UserPostsPageComponent,
    EventFormComponent,
    UserPostsPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userRouting),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class UserModule { }
