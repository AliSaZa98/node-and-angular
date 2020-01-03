import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";


const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({ providedIn: "root" })
export class UsersService {
    

    constructor(private http: HttpClient, private router: Router) { }



 
    getUsers() {
        return this.http.get<{
           email:string
        }>(BACKEND_URL + '/list')
    }

 



    deleteUsers(UsersId: string) {
        return this.http.delete(BACKEND_URL + UsersId);
    }
}
