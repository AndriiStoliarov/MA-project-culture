import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PosterPageComponent } from './poster-page/poster-page.component';
import { MainLayoutComponent } from './shared/components';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'posts/:id', component: PostPageComponent},
      // {path: 'poster', component: PosterPageComponent},
      // {path: 'about', component: AboutPageComponent}
      // {path: '**', redirectTo: 'home'}
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('./user').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
