import {Component, OnDestroy, OnInit} from "@angular/core";
import {Movie} from "../model/movie.model";
import {ActivatedRoute} from "@angular/router";
import {MoviesApiService} from "../service/movies-api.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "movie",
    template: `
        <section *ngIf="movie">
            <div *ngIf="!isEditing">
                <h1>{{movie.title}}</h1>
                {{movie.genre}}, {{movie.year}}, {{movie.running_time}}
            </div>
            <form *ngIf="isEditing">
                <input placeholder="Title" name="title" [(ngModel)]="movie.title">
                <input placeholder="Genre" name="genre" [(ngModel)]="movie.genre">
                <input placeholder="Year" name="year" [(ngModel)]="movie.year">
                <input placeholder="Running time" name="running time" [(ngModel)]="movie.running_time">
            </form>
            <button (click)="editMovie()">{{isEditing ? 'Done' : 'Edit'}}</button>
        </section>
    `
})

export class MovieDetailComponent implements OnInit, OnDestroy {
    movie: Movie;
    _routeSubscription: Subscription;
    private isEditing: boolean;

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

    editMovie() {
        if (this.isEditing) this._moviesApiService.putMovie(this.movie);
        this.isEditing = !this.isEditing;
    }
}