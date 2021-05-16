import { Component, OnDestroy, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Records, Post } from '../../types';
import { CategoriesService, PostsService } from '../../services';
import { Category } from '../../../user/shared/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy{

  public length = 0;
  public pageSize = 6;
  public pageIndex = 0;
  public pageSizeOptions = [3, 6, 12, 48];
  public showFirstLastButtons = true;

  public posts: Post[] = [];
  private records: Records[] = [];
  private subscription: Subscription = new Subscription();
  public loading = false;
  public searchStr = '';
  public paginationPosts: Post[] = [];
  public categories: Category[];

  constructor(
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.subscription
      .add(this.getPosts())
      .add(this.getCategories());
  }

  private getPosts(): Subscription {
    // tslint:disable-next-line: deprecation
    return this.postsService.getPosts().subscribe((record: Records) => {
      this.records.push(record);
      this.posts = this.records[0].records;
      this.paginationPosts = this.posts.slice(0, this.pageSize);
      this.length = this.posts.length;
      this.loading = true;
    });
  }

  private getCategories(): Subscription {
    // tslint:disable-next-line: deprecation
    return this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  public handlePageEvent(event: PageEvent): void {
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

}
