import {Component, OnInit} from "@angular/core";
import {Movie} from "../model/movie.model";
import {MoviesApiService} from "../service/movies-api.service";

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

    constructor(private _moviesApiService: MoviesApiService) {
    }

    async ngOnInit() {
        this.movies = await this._moviesApiService.getMovies();
    }
}
