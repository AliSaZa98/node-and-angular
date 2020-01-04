import { CategoryService } from './../category.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edite-category-dialog',
  templateUrl: './edite-category-dialog.component.html',
  styleUrls: ['./edite-category-dialog.component.css']
})
export class EditeCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditeCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private categoryService: CategoryService) { }

  form: FormGroup;
  ngOnInit() {
    console.log('in dualll', this.data);
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      title: new FormControl(this.data.title, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      parentId: new FormControl(this.data.parentId, { validators: [Validators.required] }),
      Path: new FormControl(this.data.path, { validators: [Validators.required] }),
    });
  }
  saveCategory() {
    if (this.form.invalid) {
      return;
    }
    console.log('ssss', this.form.value);
    this.categoryService.editeCategory(this.form.value, this.data._id).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
