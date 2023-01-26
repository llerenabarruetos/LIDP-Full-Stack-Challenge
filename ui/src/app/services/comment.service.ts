import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import { catchError } from 'rxjs/operators';

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
  postComment(postId: number, username: string, body: string): Observable<any> {
    return this.http.post(`${environment.server}/comments`,
        {   postId: postId,
            username: username,
            body: body }, 
        httpOptions
    )
        .pipe(
            catchError(error => this.handleError(error))
        );
  }

  // GET (paginated) Comments:
  getComments(pageNum: number, postId: number): Observable<any> {
    return this.http.get(`${environment.server}/comments?postId=${postId}&page=${pageNum}&size=${this.pageSize}`)
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
