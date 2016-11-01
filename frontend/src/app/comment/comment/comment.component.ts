import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  errorMessage: string;
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments()
    .subscribe(
      (comments) => { 
        this.comments = comments;
      },
      error => this.errorMessage = <any>error
    )
  }

  addComment(text: string) {
    if (!text) { return;}
    this.commentService.addComment(text)
    .subscribe(
      (comment) => {
        this.comments.push(comment);
      },
      error => this.errorMessage = <any>error
    );
  }
}
