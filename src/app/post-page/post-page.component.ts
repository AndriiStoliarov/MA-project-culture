import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pairwise, switchMap } from 'rxjs/operators';
import { PostsService } from '../shared/services';
import { Post } from '../shared/types';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  hiding = true;
  previousUrl = '';

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.params.id);
      })
    );

    this.router.events.pipe(
      filter((event) => event instanceof RoutesRecognized),
      pairwise()
      ).subscribe((event: any[]) => {
      console.log(event[0].urlAfterRedirects);
      this.previousUrl = event[0].urlAfterRedirects;
      this.hiding = this.previousUrl === '/home' ? true : false;
      console.log(this.hiding);
    });
  }

}
