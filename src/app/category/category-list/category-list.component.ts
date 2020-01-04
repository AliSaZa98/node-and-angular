import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { CategoryService } from "../category.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})
export class CategorytListComponent implements OnInit {
  isLoading = true;
  comments;
  private postId: string;
  private authStatusSub: Subscription;
  form: FormGroup;

  constructor(
    public categoryService: CategoryService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategories().subscribe(res => {
      console.log('afaf', res);
    })
  }

}
