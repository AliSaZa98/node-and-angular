import { CategoryService } from './../category.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  isLoading = false;

  form: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      parentId: new FormControl(null, { validators: [Validators.required] }),
      Path: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    console.log('ssss', this.form.value);
    this.categoryService.addCategory(
      this.form.value.title,
      this.form.value.parentId,
      this.form.value.Path,
    );
    this.form.reset();
  }


}
