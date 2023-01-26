import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../domain/Post';
import { PostFocusViewComponent } from '../post-focus-view/post-focus-view.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-post-light-view',
  templateUrl: './post-light-view.component.html',
  styleUrls: ['./post-light-view.component.less']
})
export class PostLightViewComponent implements OnInit {
  // Post object passed in by parent component that spawned this component:
  @Input() post: Post;

  // Reactive form for commenting:
  commentForm: FormGroup;
  // Boolean to only display username input if comment has text:
  commentHasText = false;

  constructor(private postFocusDialog: MatDialog, private commentPostedSnackBar: MatSnackBar, 
    private commentService: CommentService) { }

  openFocusView(): void {
    const focusDialogRef = this.postFocusDialog.open(PostFocusViewComponent, {
      data: this.post
    })
  }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      username: new FormControl(),
      comment: new FormControl()
    });

    this.commentForm.get('comment').valueChanges.subscribe(text => {
      this.commentHasText = (text != null && text.length > 0) ? true : false;
    })
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

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
