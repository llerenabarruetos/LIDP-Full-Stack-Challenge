import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../domain/Post';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../domain/Comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.less']
})
export class CommentFormComponent implements OnInit {
  // Reactive form for commenting:
  commentForm: FormGroup;
  // Boolean to only display username input if comment has text:
  commentHasText = false;

  // Reference to comment input field:
  @ViewChild('commentInputField') commentInputField;

  // Post object passed in by parent component (used to POST comment)
  @Input() post: Post;

  // Boolean to display a different color on focus view:
  @Input() focusView: boolean;

  // Receive a comment if user has selected to reply to that comment (otherwise it is null):
  @Input() replyingTo: Comment = null;
  inputPlaceholder = "This post reminds me of...";

  constructor(private commentPostedSnackBar: MatSnackBar, private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      username: new FormControl(),
      comment: new FormControl()
    });

    this.commentForm.get('comment').valueChanges.subscribe(text => {
      this.commentHasText = (text != null && text.length > 0) ? true : false;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('replyingTo')) {
      this.commentInputField.nativeElement.focus();
    }
  }

  submitComment() {
    // Submit comment if there is text:
    if (this.commentHasText) {
      // Use "AnonymousUser" username if username was not provided
      const authorName = (this.commentForm.get('username').value === null) ? 'AnonymousUser' : this.commentForm.get('username').value;
      
      // Post comment to backend:
      this.commentService.postComment(this.post.identification, 
        authorName, this.commentForm.get('comment').value)
        .subscribe(() => {
          // Handle form resetting and snackbar:
          this.commentForm.reset();
          this.commentPostedSnackBar.open("Comment successfully posted!", null, {
            duration: 4000
          });
          this.commentHasText = false;
        });
    }
  }
}
