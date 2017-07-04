import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class HttpService {
    constructor(private _http: Http) {
    }

    get(url: String): Promise<any> {
        return this._http.get("/api/" + url)
            .toPromise()
            .then(response => {
                return response.json()
            })
            .catch(error => console.error(error))
    }
}
