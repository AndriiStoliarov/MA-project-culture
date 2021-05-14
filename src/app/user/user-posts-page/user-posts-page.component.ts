import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Records, Post } from '../../shared/types';
import { PostsService } from '../../shared/services';

@Component({
  selector: 'app-user-posts-page',
  templateUrl: './user-posts-page.component.html',
  styleUrls: ['./user-posts-page.component.css']
})
export class UserPostsPageComponent implements OnInit, OnDestroy {

  private posts: Post[] = [];
  public userPosts: Post[] = [];
  private records: Records[] = [];
  private subscription: Subscription = new Subscription();
  public loading = false;
  private currentUserId = localStorage.getItem('currentUserId');

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.subscription.add(this.getPosts());
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
