import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { userRouting } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { EventFormComponent } from './shared/components';
import { UserLayoutComponent } from './shared/components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    UserPostsPageComponent,
    EventFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userRouting)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class UserModule { }
