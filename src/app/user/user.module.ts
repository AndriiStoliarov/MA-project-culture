import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { userRouting } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFormComponent } from './shared/components';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

const matModules = [
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    UserPostsPageComponent,
    EventFormComponent
  ],
  imports: [



    CommonModule,
    ReactiveFormsModule,
    ...matModules,
    RouterModule.forChild(userRouting)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class UserModule {

}
