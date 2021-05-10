import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../../../user/shared/types';
import { CategoriesService } from '../../services';
import { Post } from '../../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy{

  @Input() post: Post;
  public categories: Category[];
  public categoryName = '';
  private subscription: Subscription = new Subscription();
  // loaded = true;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.subscription.add(this.getCategories());
  }

  private getCategories(): Subscription {
    // tslint:disable-next-line: deprecation
    return this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      this.categoryName = this.categories
        .filter((item) => item.id === this.post.category_id)
        .find((item) => item.name).name;

      console.log(this.categories);
      console.log(this.post);
      console.log(this.categoryName);
    });
  }

  public getCategoryName(): void {

  }

  // loader(): void {
  //   console.log('123');
  //   this.loaded = false;
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
