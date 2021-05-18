import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostsService } from '../shared/services';
import { Post } from '../shared/types';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.params.id);
      })
    );
  }

  isNavigate(): void {
    this.location.back();
  }

}
