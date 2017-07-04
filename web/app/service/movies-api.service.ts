import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

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
}
