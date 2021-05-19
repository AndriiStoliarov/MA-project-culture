import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PostsService } from '../shared/services';
import { Post } from '../shared/types';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const postId = +this.route.snapshot.params.id;
    this.post$ = this.postsService.post$;
    this.postsService.getById(postId).subscribe();
  }

  isNavigate(): void {
    this.location.back();
  }

}
