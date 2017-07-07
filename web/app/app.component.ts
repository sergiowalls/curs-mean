import {Component, OnInit} from "@angular/core";
import {AuthService} from "./service/auth.service";

@Component({
    selector: "main-app",
    template: `
        <nav class="main-nav">
            <a routerLink="/quotes">Quotes</a>
            <a routerLink="/categories">Categories</a>
            <a routerLink="/movies">Movies</a>
            <a *ngIf="!isLogged" routerLink="/login">Login</a>
        </nav>
        <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
    isLogged: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.getIsLogged().subscribe((isLogged) => {
            this.isLogged = isLogged
        })
    }

}