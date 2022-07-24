import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event) {
    event.preventDefault();
    this.delete.emit(this.post);
  }
}
