import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../../models/comment';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent implements OnInit {
  commentFull: Comment[];
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.commentService.getCommentByiD(value.id).subscribe(value1 => {
        this.commentFull = value1;
      });
    });
  }

  ngOnInit(): void {
  }

}
