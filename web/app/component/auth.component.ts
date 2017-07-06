import {Component, OnInit} from "@angular/core";
import {AuthApiService} from "../service/auth-api.service";

@Component({
    selector: "auth-form",
    template: `
        <form>
            <input placeholder="username" name="username" [(ngModel)]="username">
            <input type="password" placeholder="password" name="password" [(ngModel)]="password">
            <button (click)="postLogin()">Submit</button>
        </form>`
})

export class AuthComponent implements OnInit {

    private username: String;
    private password: String;

    constructor(private _authApiService: AuthApiService) {
    }

    ngOnInit() {

    }

    postLogin() {
        this._authApiService.postLogin(this.username, this.password);
    }

}
