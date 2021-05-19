import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  NeedComponent,
  NeedFormComponent,
  PostComponent,
  PostsComponent,
  ProposalComponent,
} from './components';
import { SearchTitlePipe } from './pipes';
import { AuthInterceptor } from './services/auth.interceptor';
// import { NgxMatFileInputModule } from '@angular-material-components/file-input';


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
  MatSelectModule,
  MatSnackBarModule,
  // NgxMatFileInputModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...matModules,
  ],
  declarations: [
    NeedFormComponent,
    NeedComponent,
    PostComponent,
    PostsComponent,
    SearchTitlePipe,
    NeedComponent,
    ProposalComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostComponent,
    PostsComponent,
    SearchTitlePipe,
    RouterModule,
    NeedComponent,
    NeedFormComponent,
    ProposalComponent,
    ...matModules,
  ],
 })
 export class SharedModule { }
