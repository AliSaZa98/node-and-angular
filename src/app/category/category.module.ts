import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { AngularMaterialModule } from "../angular-material.module";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CategorytListComponent } from "./category-list/category-list.component";
import { EditeCategoryDialogComponent } from './edite-category-dialog/edite-category-dialog.component';

@NgModule({
  declarations: [CategorytListComponent,AddCategoryComponent, EditeCategoryDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ],
  entryComponents: [
    EditeCategoryDialogComponent
  ]
})
export class categoryModule { }
