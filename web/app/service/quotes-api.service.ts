import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Http} from "@angular/http";

@Injectable()
export class QuotesApiService {
    constructor(private _httpService: HttpService) {
    }

    getQuotes(): Promise<any> {
        return this._httpService.get("quotes");
    }
}
