import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Post } from '../../types';
import { PostsService } from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy{

  length = 0;
  pageSize = 6;
  pageIndex = 0;
  pageSizeOptions = [3, 6, 12, 48];
  showFirstLastButtons = true;

  posts: Post[] = [];
  loading = false;
  private subscription: Subscription = new Subscription();
  searchStr = '';
  public events = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  public pageSlice = this.events.slice(0, this.pageSize);

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.events.forEach((item) => {
      this.subscription.add(this.getPosts(item));
    });
    this.length = this.events.length;
  }

  // ngOnInit(): void {
  //   this.subscription.add(this.getPosts());
  //   this.length = this.events.length;
  // }

  getPosts(id: number): any {
    // tslint:disable-next-line: deprecation
    return this.postsService.getPosts(id).subscribe((post: Post) => {
    this.posts.push(post);
    this.loading = true;

    console.log(this.posts);
  });
}

  handlePageEvent(event: PageEvent): void {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.events.length) {
      endIndex = this.events.length;
    }

    this.pageSlice = this.events.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
