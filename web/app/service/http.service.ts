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
    }

    post(url: String, data: any): Promise<any> {
        return this._http.post("/api/" + url, data)
            .toPromise()
            .then(response => {
                return response.json()
            })
    }

    put(url: String, data: any): Promise<any> {
        return this._http.put("/api/" + url, data)
            .toPromise()
            .then(response => {
                return response.json()
            })
    }
}
