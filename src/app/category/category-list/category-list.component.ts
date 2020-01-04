import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { CategoryService } from "../category.service";
import { AuthService } from "../../auth/auth.service";
import { MatDialog } from "@angular/material";
import { EditeCategoryDialogComponent } from "../edite-category-dialog/edite-category-dialog.component";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})
export class CategorytListComponent implements OnInit {
  isLoading = true;
  categories = [];
  private postId: string;
  private authStatusSub: Subscription;
  form: FormGroup;

  constructor(
    public categoryService: CategoryService,
    public route: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(res => {
      console.log('afaf', res);
      this.categories = res;
      this.isLoading = false;
    })
  }
  onDelete(id) {
    this.isLoading = true;
    this.categoryService.deleteCategory(id).subscribe(res => {
      this.getCategory();
    })
  }
  editeDialog(data) {
    const dialogRef = this.dialog.open(EditeCategoryDialogComponent, {
      width: '600px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      if (result) {
        this.getCategory();
      }
    });
  }

}
