import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  // loaded = true;

  constructor() { }

  ngOnInit(): void { }

  // loader(): void {
  //   console.log('123');

  //   this.loaded = false;
  // }

}
