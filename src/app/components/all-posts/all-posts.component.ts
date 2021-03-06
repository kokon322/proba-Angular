import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts: Post[];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => {
      this.allPosts = value;
    });
  }

  ngOnInit(): void {
  }

}
