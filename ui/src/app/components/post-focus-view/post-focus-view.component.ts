import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post, private commentService: CommentService) {
    this.post = data;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      // get first page (0) of comments
      this.commentService.getComments(this.currPage, this.post.identification).subscribe(
        comments => { 
          this.comments = this.comments.concat(comments.content);
          this.lastPage = comments.totalPages;
        }
      )
    );
  }

  scrollToFetchComments(): void {
    console.log("scrolling")
    const scrollDistance = this.leftHalf.nativeElement.scrollTop + this.leftHalf.nativeElement.clientHeight;
    if(scrollDistance >= this.leftHalf.nativeElement.scrollHeight - 20 && 
      this.currPage < this.lastPage) {
        this.currPage++;

        this.commentService.getComments(this.currPage, this.post.identification).subscribe(
          comments => this.comments = this.comments.concat(comments.content)
        )
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
