import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styles: [],
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id &&
      this.postService.getPost(+id).subscribe((post) => {
        this.post = post;
      });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.postService.update(this.post).subscribe(() => {
      this.goBack();
    });
  }
}
