import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../domain/Comment';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.less', '../comment/comment.component.less']
})
export class ReplyCommentComponent implements OnInit {
  @Input() comment: Comment;

  // To convert SQL timestamp to Date object
  timestamp: Date;

  // To detect hovering over the action-corner of a reply-comment:
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

}
