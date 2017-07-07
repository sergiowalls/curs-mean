import {Component, OnInit} from "@angular/core";
import {AuthApiService} from "../service/auth-api.service";
import {AuthService} from "../service/auth.service";

@Component({
    selector: "auth-form",
    template: `
        <h1>Login</h1>
        <form>
            <input placeholder="username" name="username" [(ngModel)]="username">
            <input type="password" placeholder="password" name="password" [(ngModel)]="password">
            <button (click)="postLogin()">Submit</button>
        </form>`
})

export class AuthComponent implements OnInit {

    private username: String;
    private password: String;

    constructor(private _authApiService: AuthApiService, private _authService: AuthService) {
    }

    ngOnInit() {

    }

    async postLogin() {
        try {
            await this._authApiService.postLogin(this.username, this.password);
            this._authService.announceLogin(true)
        }
        catch (e) {

        }
    }

}
