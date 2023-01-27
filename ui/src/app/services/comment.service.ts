import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Comment } from '../domain/Comment';

// Header for POST request:
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
}

@Injectable()
export class CommentService {
  // Page size for pagination of comments:
  pageSize = 4;

  constructor(private http: HttpClient) {}

  // POST Comment:
  postComment(postId: number, username: string, body: string, replyingTo: Comment): Observable<any> {
    let reqBody = { postId: postId,
        username: username,
        body: body 
    };
    // Append the parent comment (the one this new comment is replying to) if it is a reply comment:
    if (replyingTo)
        reqBody["parentComment"] = replyingTo;

    return this.http.post(`${environment.server}/comments`,
        reqBody, 
        httpOptions
    )
        .pipe(
            catchError(error => this.handleError(error))
        );
  }

  // GET (paginated) Comments:
  getComments(pageNum: number, postId: number): Observable<any> {
    return this.http
        // Get specified page for the comments of post with given id. Sorted by date created (descending) and only those that aren't reply comments 
        // Non-reply comments are specified by "parentComment=0", which means their parentComment: Comment attribute is null
        .get(`${environment.server}/comments?postId=${postId}&page=${pageNum}&size=${this.pageSize}&sort=createdAt,DESC&parentComment=0`)
        .pipe(
            catchError(error => this.handleError(error))
        );
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${environment.server}/comments/${commentId}`)
        .pipe(
            catchError(error => this.handleError(error))
        );
  }

  // Error displaying function:
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        console.error('An error occurred in CommentService: ', error.error); // client-side or network error
    } else {
        // backend returned a response code that wasn't successful
        console.error(`Server returned an unsuccessful code ${error.status}. It says: `, error.error);
    }
    return throwError(() => new Error('Error in CommentService happened. Something went wrong when communicating with server.'));
  }
}
