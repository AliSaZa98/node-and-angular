import { CategorytListComponent } from './category/category-list/category-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersListComponent } from './users/users-list.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { AddCommentComponent } from "./comment/add-comment/add-comment.component";

const routes: Routes = [
  { path: '', redirectTo: '/allposts', pathMatch: 'full' },
  { path: "allposts", component: PostListComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "comment/:postId", component: AddCommentComponent, canActivate: [AuthGuard] },
  { path: "commentList/:postId", component: CommentListComponent, canActivate: [AuthGuard] },
  { path: "commentList", component: CommentListComponent, canActivate: [AuthGuard] },
  { path: "users", component: UsersListComponent, canActivate: [AuthGuard] },
  { path: "contactUs", component: ContactUsComponent },
  { path: "addCategory", component: AddCategoryComponent },
  { path: "categoryList", component: CategorytListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
