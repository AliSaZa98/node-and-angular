import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/contactUs";

@Injectable({ providedIn: "root" })
export class ContactUsService {


    constructor(private http: HttpClient, private router: Router) { }

    getComments() {
        return this.http.get<{
            _id: string;
            title: string;
            desk: string;
            author: string;
            postId: string;
        }>(BACKEND_URL);
    }

    getComment(id: string) {
        let url = environment.apiUrl + "/comment/"
        return this.http.get<{
            _id: string;
            title: string;
            desk: string;
            author: string;
            postId: string;
        }>(url + id);
    }

    sendEmail() {
        return this.http.get<any>(BACKEND_URL);
    }



    deleteComment(commentId: string) {
        return this.http.delete(BACKEND_URL + commentId);
    }
}
