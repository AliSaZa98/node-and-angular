import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";
import { UsersService } from "./users.service";


@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {

  isLoading = false;
  users = [];
  constructor(
    private userservice: UsersService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.isLoading = true;
    this.userservice.getUsers().subscribe(res => {
      console.log('resssdaffa', res);
      this.users = res;
      this.isLoading = false;

    })
  }
  deleteUser(id) {
    this.isLoading = true;
    this.userservice.deleteUsers(id).subscribe(res => {
      this.getUsers();
    })
  }

}
