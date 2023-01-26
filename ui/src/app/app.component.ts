import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { PostService } from './services/post.service';
import {Post} from './domain/Post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  // Get reference to post container to detect scrolling
  @ViewChild('postContainer') postContainer: ElementRef;

  // Array of posts gotten from backend:
  posts: Array<Post> = [];

  // Pagination of posts: Current page number (each page containing a number of posts specified in app.service.ts)
  currPage = 0;
  lastPage: number; // index of last page

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      // get first page (0) of posts on initialization of page
      this.postService.getPosts(this.currPage).subscribe(
        posts => { 
          this.posts = this.posts.concat(posts.content);
          this.lastPage = posts.totalPages;
        }
      )
    );
  }

  // Check if user has scrolled enough to get more posts (if any)
  scrollToFetch(): void {
    const horizontalLimit = this.postContainer.nativeElement.scrollWidth - this.postContainer.nativeElement.clientWidth;

    // If user has scrolled to the end and there are still more pages left, fetch and append more to posts:
    if (this.postContainer.nativeElement.scrollLeft + 20 >= horizontalLimit &&
      this.currPage < this.lastPage) {
      this.currPage++;
      
      this.postService.getPosts(this.currPage).subscribe(
        newPosts => this.posts = this.posts.concat(newPosts.content)
      );      
    }
  }

  // To be able to horizontally scroll:
  scrollWithWheel(event: WheelEvent): void {
    this.postContainer.nativeElement.scrollLeft += event.deltaY / 3;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
