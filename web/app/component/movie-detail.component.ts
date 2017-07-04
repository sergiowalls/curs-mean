import {Component, OnDestroy, OnInit} from "@angular/core";
import {Movie} from "../model/movie.model";
import {ActivatedRoute} from "@angular/router";
import {MoviesApiService} from "../service/movies-api.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "movie",
    template: `
        <section *ngIf="movie">
            <h1>{{movie.title}}</h1>
            <div>{{movie.genre}}, {{movie.year}}, {{movie.running_time}}</div>
        </section>
    `
})

export class MovieDetailComponent implements OnInit, OnDestroy {
    movie: Movie;
    _routeSubscription: Subscription;

    constructor(private _route: ActivatedRoute, private _moviesApiService: MoviesApiService) {
    }

    ngOnInit() {
        this._routeSubscription = this._route.params.subscribe(async param => {
            this.movie = await this._moviesApiService.getMovieById(param.id)
        });
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe();
    }
}