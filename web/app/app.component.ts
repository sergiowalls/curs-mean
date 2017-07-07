import {Component} from "@angular/core";

@Component({
    selector: "main-app",
    template: `
        <nav class="main-nav">
            <a routerLink="/quotes">Quotes</a>
            <a routerLink="/categories">Categories</a>
            <a routerLink="/movies">Movies</a>
            <a routerLink="/login">Login</a>
        </nav>
        <router-outlet></router-outlet>`
})

export class AppComponent {
}