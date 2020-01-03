import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { AngularMaterialModule } from "../angular-material.module";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CategorytListComponent } from "./category-list/category-list.component";

@NgModule({
  declarations: [CategorytListComponent,AddCategoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ]
})
export class categoryModule { }
