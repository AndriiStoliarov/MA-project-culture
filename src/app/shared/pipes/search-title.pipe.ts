import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../types';

@Pipe({
  name: 'searchPosts'
})
export class SearchTitlePipe implements PipeTransform {
  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
