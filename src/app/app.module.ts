import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './components/all-comments/comment/comment.component';
import { PostComponent } from './components/all-posts/post/post.component';
import { UserComponent } from './components/all-users/user/user.component';
import { FullCommentComponent } from './components/all-comments/full-comment/full-comment.component';
import { FullPostComponent } from './components/all-posts/full-post/full-post.component';
import { FullUserComponent } from './components/all-users/full-user/full-user.component';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent},
  {path: 'posts', component: AllPostsComponent, children: [
      {path:'post', component: FullPostComponent}
    ]},
  {path: 'comments', component: AllCommentsComponent, children: [
      {path:'comment', component: FullCommentComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    FullCommentComponent,
    FullPostComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
