import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { userRouting } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { EventFormComponent, UserLayoutComponent } from './shared/components';
import { SharedModule } from '../shared';
import { ProposalComponent } from './shared/components/proposal/proposal.component';
import { ProposalsComponent } from './shared/components/proposals/proposals.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    UserPostsPageComponent,
    EventFormComponent,
    UserPostsPageComponent,
    ProposalComponent,
    ProposalsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(userRouting)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class UserModule { }
