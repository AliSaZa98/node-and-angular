import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule, CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AngularMaterialModule } from "../angular-material.module";
import { UsersListComponent } from "./users-list.component";

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class UsersModule { }
