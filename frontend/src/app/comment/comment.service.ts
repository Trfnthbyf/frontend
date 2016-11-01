import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Comment } from './comment';

@Injectable()
export class CommentService {
  private commentsUrl = 'http://localhost:1337/data';

  constructor(private http: Http) { }

  getComments() {
    return this.http.get(this.commentsUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {    
    let body = res.json();
    return body.data || body.comment || [];
  }

    private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

addComment (comment: string){
    let body = JSON.stringify({ comment });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.commentsUrl, body)
          .map(res => res.json())
          .catch(this.handleError);
  }
}
