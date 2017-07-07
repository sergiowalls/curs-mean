import {Component, OnInit} from "@angular/core";
import {Movie} from "../model/movie.model";
import {MoviesApiService} from "../service/movies-api.service";
import {Router} from "@angular/router";

@Component({
    selector: "movies",
    template: `
        <div class="movie-list-component">
            <ul *ngIf="movies">
                <li *ngFor="let movie of movies" routerLink="/movies/{{movie.id}}">
                    {{ movie.title }}
                </li>
            </ul>
        </div>`
})

export class MovieListComponent implements OnInit {
    movies: Movie[];

    constructor(private _moviesApiService: MoviesApiService, private _router: Router) {
    }

    async ngOnInit() {
        try {
            this.movies = await this._moviesApiService.getMovies();
        } catch (err) {
            if (err.status === 401) this._router.navigate(["login"])
        }
    }
}
