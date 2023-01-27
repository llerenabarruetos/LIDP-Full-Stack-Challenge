import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { handleError } from './error-handling.service';

@Injectable()
export class PostService {
  // Page size for pagination of posts:
  pageSize = 4;

  constructor(private http: HttpClient) {}

  getPosts(pageNum: number): Observable<any> {
    return this.http.get(`${environment.server}/posts?page=${pageNum}&size=${this.pageSize}`)
      .pipe(
          catchError(error => handleError(error, "PostService"))
      );
  }
}
