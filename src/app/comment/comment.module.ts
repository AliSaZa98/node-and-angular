import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AddCommentComponent } from "./add-comment/add-comment.component";

import { AngularMaterialModule } from "../angular-material.module";
import { CommentListComponent } from "./comment-list/comment-list.component";

@NgModule({
  declarations: [AddCommentComponent,CommentListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ]
})
export class commentModule { }
