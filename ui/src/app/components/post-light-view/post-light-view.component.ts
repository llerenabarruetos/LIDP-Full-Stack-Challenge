import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../domain/Post';
import { PostFocusViewComponent } from '../post-focus-view/post-focus-view.component';


@Component({
  selector: 'app-post-light-view',
  templateUrl: './post-light-view.component.html',
  styleUrls: ['./post-light-view.component.less']
})
export class PostLightViewComponent implements OnInit {
  // Post object passed in by parent component that spawned this component:
  @Input() post: Post;

  constructor(private postFocusDialog: MatDialog) { }

  openFocusView(): void {
    this.postFocusDialog.open(PostFocusViewComponent, {
      data: this.post
    })
  }

  ngOnInit(): void {
    
  }

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
