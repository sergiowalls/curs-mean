import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CategoriesApiService {
    constructor(private _http: Http) {
    }

    getCategories(): Promise<any> {
        return this._http.get("/api/categories")
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(error => {
                console.error(error)
            })
    }
}
