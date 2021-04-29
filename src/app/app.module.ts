import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PosterPageComponent } from './poster-page/poster-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SharedModule } from './shared';
import { MainLayoutComponent } from './shared/components';
import { PostComponent } from './shared/components';
import { RegistrationPageComponent } from './shared/components';
import { PostsComponent } from './shared/components';
import { NeedFormComponent } from './shared/components';
import { SearchPipe } from './shared/pipes';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PosterPageComponent,
    AboutPageComponent,
    PostPageComponent,
    PostComponent,
    RegistrationPageComponent,
    PostsComponent,
    NeedFormComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
