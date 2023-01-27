import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../domain/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
  // Comment object passed in by parent:
  @Input() comment: Comment;
  // Boolean passed from parent: True if this comment is a reply comment:
  @Input() isReply: boolean;

  // Outputs that trigger a function in Focus View:
  @Output() replyButtonPressed = new EventEmitter<void>();
  @Output() deleteButtonPressed = new EventEmitter<number>(); // passes the comment-to-be-deleted's id 

  // To convert SQL timestamp to Date object
  timestamp: Date;

  // Boolean that is true when use is hovering over top-right corner (date/actions):
  hovering = false;

  constructor() { }

  ngOnInit(): void {
    this.timestamp = new Date(this.comment.createdAt)
  }

  // Manipulation of top-right (date/action) corner:
  onMouseEnterDateCorner() {
    this.hovering = true;
  }
  onMouseLeaveDateCorner() {
    this.hovering = false;
  }

  // Comment Actions:
  deleteComment(commentId: number) {
    this.deleteButtonPressed.emit(commentId);
  }
  replyToComment() {
    this.replyButtonPressed.emit();
  }
}
