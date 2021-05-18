import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostsService } from '../shared/services';
import { Post } from '../shared/types';
import { AuthService } from '../user/shared/services';

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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.params.id);
      })
    );
  }

  isNavigate(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/user', 'posts']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
