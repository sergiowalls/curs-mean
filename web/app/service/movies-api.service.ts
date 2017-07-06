import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Movie} from "../model/movie.model";

@Injectable()
export class MoviesApiService {
    constructor(private _httpService: HttpService) {
    }

    getMovies(): Promise<any> {
        return this._httpService.get("movies");
    }

    getMovieById(id: number): Promise<any> {
        return this._httpService.get("movies/" + id);
    }

    putMovie(movie: Movie): Promise<any> {
        return this._httpService.put("movies/" + movie.id, movie)
    }
}
