import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../shared/services';
import { Post } from '../shared/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  // posts: Post[] = [];
  // private subscription: Subscription = new Subscription();
  // searchStr = ''; [(ngModel)]="searchStr"

  // constructor(private postsService: PostsService) { }
  constructor() { }

  ngOnInit(): void {
    // this.subscription.add(this.postsService.getPosts().subscribe(posts => {
    //   this.posts = posts;
    // }));
  }

  ngOnDestroy(): void {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
