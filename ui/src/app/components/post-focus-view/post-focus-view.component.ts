import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../domain/Post';
import { Comment } from '../../domain/Comment';
import { CommentService } from '../../services/comment.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-focus-view',
  templateUrl: './post-focus-view.component.html',
  styleUrls: ['./post-focus-view.component.less', '../../app.component.scss']
})
export class PostFocusViewComponent implements OnInit {  
  private subscriptions: Subscription[] = [];
  
  post: Post;

  // Get reference to left half to detect scrolling
  @ViewChild('leftHalf') leftHalf: ElementRef;

  // Current array of comments from backend for this post:
  comments: Array<Comment> = [];

  // Current page of comments (for pagination)
  currPage = 0;
  lastPage: number; // index of last page of comments

  // Current comment the user is trying to reply to (if any):
  commentToReply: Comment = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post, private commentService: CommentService,
    private commentDeletedSnackBar: MatSnackBar) {
    this.post = data;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.getComments(true)
    );
  }

  getComments(refresh: boolean): Subscription {
    // refresh: true if comments array should be resetted instead of appended to
    this.currPage = refresh ? 0 : this.currPage;

    // get first page (0) of comments
    return this.commentService.getComments(this.currPage, this.post.identification).subscribe(
      comments => { 
        if (refresh)
          this.comments = comments.content;
        else
          this.comments = this.comments.concat(comments.content);
        this.lastPage = comments.totalPages;
      }
    );
  }

  // User clicked to reply to a comment:
  onReplyToComment(comment: Comment) {
    // set commentToReply to that comment so that comment-form knows (it has this.commentToReply as an @Input)
    this.commentToReply = comment;
  }
  // User clicked to delete a comment (commentId is passed in via emit() from the child to this component (the parent))
  onDeleteComment(commentId: number) {
    // DELETE REQUEST:
    this.commentService.deleteComment(commentId).subscribe(
      () => {
        // SnackBar notice of deletion:
        this.commentDeletedSnackBar.open("Comment successfully deleted!", null, {
          duration: 4000
        });

        // Update comments array:
        this.getComments(true);
      }
    )
  }

  // Scroll to get next page of comments:
  scrollToFetchComments(): void {
    const scrollDistance = this.leftHalf.nativeElement.scrollTop + this.leftHalf.nativeElement.clientHeight;
    if(scrollDistance >= this.leftHalf.nativeElement.scrollHeight - 20 && 
      this.currPage < this.lastPage) {
        this.currPage++;

        this.getComments(false);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
