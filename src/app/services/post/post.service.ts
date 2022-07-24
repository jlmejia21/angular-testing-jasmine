import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }

  deletePost(post: Post) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
  }

  update(post: Post) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
  }
}
