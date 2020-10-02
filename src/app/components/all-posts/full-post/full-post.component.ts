import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPost: Post[];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getPostByid(value.id).subscribe(value1 => {
        this.fullPost = value1;
      });
    });
  }

  ngOnInit(): void {
  }

}
