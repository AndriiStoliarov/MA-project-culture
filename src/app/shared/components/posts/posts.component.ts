import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';

import { AuthService, PostsService } from '../../services';
import { Post, Records } from '../../types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy{

  length = 0;
  pageSize = 6;
  pageIndex = 0;
  pageSizeOptions = [3, 6, 12, 48];
  showFirstLastButtons = true;

  posts: Post[] = [];
  loading = false;
  searchStr = '';
  paginationPosts: Post[] = [];

  private records: Records[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.subscription
      .add(this.getPosts());
  }

  private getPosts(): Subscription {
    return this.postsService.getPosts().subscribe((record: Records) => {
      this.records.push(record);
      this.posts = this.records[0].records;
      this.paginationPosts = this.posts.slice(0, this.pageSize);
      this.length = this.posts.length;
      this.loading = true;
    });
  }

  handlePageEvent(event: PageEvent): void {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    const startIndex = event.pageIndex * event.pageSize;

    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.posts.length) {
      endIndex = this.posts.length;
    }

    this.paginationPosts = this.posts.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleCreateEvent(): void {
    this.authService.isAuthenticated();
  }
}
