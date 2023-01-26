import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../domain/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
  // Comment object passed in by parent:
  @Input() comment: Comment;

  // To convert SQL timestamp to Date object
  timestamp: Date;

  constructor() { }

  ngOnInit(): void {
    this.timestamp = new Date(this.comment.createdAt)
  }

}
