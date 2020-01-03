import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { CommentService } from "../comment.service";
import { Comment } from "../comment.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit, OnDestroy {
  isLoading = true;
  comments;
  private postId: string;
  private authStatusSub: Subscription;
  form: FormGroup;

  constructor(
    public commentService: CommentService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.postId = paramMap.get("postId");
        this.isLoading = true;
      } else {
        this.postId = null;
      }
    });

    if (this.postId == null) {
      this.commentService.getComments().subscribe(res => {
        console.log('reeeeees not id', res);
        this.isLoading = false;
        this.comments = res;
      })
    } else {
      this.commentService.getComment(this.postId).subscribe(res => {
        console.log('reeeeees by id', res);
        this.isLoading = false;
        this.comments = res;
      })
    }
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
