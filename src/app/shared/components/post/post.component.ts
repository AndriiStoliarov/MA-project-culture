import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../user/shared/types';
import { Post } from '../../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() categories: Category[];
  public categoryName = '';
  // loaded = true;

  constructor() { }

  ngOnInit(): void {
    this.categoryName = this.categories
      .filter((item) => item.id === this.post.category_id)
      .find((item) => item.name).name;
  }

  // loader(): void {
  //   console.log('123');
  //   this.loaded = false;
  // }

}
