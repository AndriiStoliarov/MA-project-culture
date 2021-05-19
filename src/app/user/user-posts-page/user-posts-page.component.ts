import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Records, Post } from '../../shared/types';
import { CategoriesService, PostsService } from '../../shared/services';
import { Category } from '../../shared/types';

@Component({
  selector: 'app-user-posts-page',
  templateUrl: './user-posts-page.component.html',
  styleUrls: ['./user-posts-page.component.css']
})
export class UserPostsPageComponent implements OnInit, OnDestroy {

  private currentUserId = localStorage.getItem('currentUserId');
  private posts: Post[] = [];
  private records: Records[] = [];
  private subscription: Subscription = new Subscription();
  public categories: Category[];
  public loading = false;
  public userPosts: Post[] = [];

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
      this.userPosts = this.posts.filter((item) => item.user_id.toString() === this.currentUserId);
      this.loading = true;
    });
  }

  private getCategories(): Subscription {
    // tslint:disable-next-line: deprecation
    return this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
