import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Category } from "./category.model";

const BACKEND_URL = environment.apiUrl + "/category";

@Injectable({ providedIn: "root" })
export class CategoryService {


    constructor(private http: HttpClient, private router: Router) { }

    getCategories() {
        return this.http.get<any>(BACKEND_URL);
    }



    addCategory(title: string, parentId: string, path: string) {
        const categoryData = {
            title: title,
            parentId: parentId,
            path: path,
        };
        console.log('commend data in front service ', categoryData);
        this.http
            .post<{ message: string; categoryData: Category }>(
                BACKEND_URL,
                categoryData
            )
            .subscribe(responseData => {
                this.router.navigate(["/categoryList"]);
            });
    }

    editeCategory(data, id: string) {
        const categoryData = {
            id: id,
            title: data.title,
            parentId: data.parentId,
            path: data.Path,
        };
        console.log('categoryData: ', categoryData);
        return this.http.put(BACKEND_URL + '/' + id, categoryData);
    }

    deleteCategory(categoryId: string) {
        console.log('categoryId: ', categoryId);
        return this.http.delete(BACKEND_URL + '/' + categoryId);
    }
}
