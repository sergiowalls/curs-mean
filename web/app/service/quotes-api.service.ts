import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Quote} from "../model/quote.model";

@Injectable()
export class QuotesApiService {
    constructor(private _httpService: HttpService) {
    }

    getQuotes(): Promise<any> {
        return this._httpService.get("quotes");
    }

    postQuote(quote: Quote): Promise<any> {
        return this._httpService.post("quotes", quote)
    }
}
