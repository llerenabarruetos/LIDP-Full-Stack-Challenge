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

  // Outputs that trigger a function in Focus View:
  @Output() replyButtonPressed = new EventEmitter<void>();
  @Output() deleteButtonPressed = new EventEmitter<void>();

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
  deleteComment() {
    this.deleteButtonPressed.emit();
  }
  replyToComment() {
    this.replyButtonPressed.emit();
  }
}
