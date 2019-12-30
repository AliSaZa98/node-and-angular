import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AddComment } from "./add-comment/add-comment.component";

import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [AddComment],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    AddComment
  ]
})
export class commentModule {}
