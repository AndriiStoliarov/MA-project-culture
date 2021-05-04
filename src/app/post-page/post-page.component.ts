import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NeedFormComponent } from '../shared/components';
import { PostsService } from '../shared/services';
import { Post } from '../shared/types';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.params.id);
      })
    );
  }

  openDialog(): void {
    this.dialog.open(NeedFormComponent);
  }

}
