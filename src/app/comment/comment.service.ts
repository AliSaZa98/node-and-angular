import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Comment } from "./comment.model";

const BACKEND_URL = environment.apiUrl + "/comment";

@Injectable({ providedIn: "root" })
export class CommentService {
    private comments: Comment[] = [];
    private commentsUpdated = new Subject<{ comments: Comment[]; commentCount: number }>();

    constructor(private http: HttpClient, private router: Router) { }

    getComments(commentPerPage: number, currentPage: number) {
        const queryParams = `?pagesize=${commentPerPage}&page=${currentPage}`;
        this.http
            .get<{ message: string; comments: any; maxComments: number }>(
                BACKEND_URL + queryParams
            )
            .pipe(
                map(commentData => {
                    return {
                        posts: commentData.comments.map(comment => {
                            return {
                                title: comment.title,
                                desk: comment.desk,
                                id: comment._id,
                                author: comment.author,
                                postId: comment.postId
                            };
                        }),
                        maxComments: commentData.maxComments
                    };
                })
            )
            .subscribe(transformedCommentData => {
                this.comments = transformedCommentData.posts;
                this.commentsUpdated.next({
                    comments: [...this.comments],
                    commentCount: transformedCommentData.maxComments
                });
            });
    }

    getCommentUpdateListener() {
        return this.commentsUpdated.asObservable();
    }

    getComment(id: string) {
        let url = environment.apiUrl + "/comment" + "/test";
        console.log('urlll:', BACKEND_URL, '/', id);
        return this.http.get<any>(url);
    }

    addComment(title: string, desk: string, author: string, postId: string, ) {
        const commentData = {
            title: title,
            desk: desk,
            author: author,
            postId: postId
        };
        console.log('commend data in front service ', commentData);
        this.http
            .post<{ message: string; comment: Comment }>(
                BACKEND_URL,
                commentData
            )
            .subscribe(responseData => {
                this.router.navigate(["/"]);
            });
    }



    deleteComment(commentId: string) {
        return this.http.delete(BACKEND_URL + commentId);
    }
}
