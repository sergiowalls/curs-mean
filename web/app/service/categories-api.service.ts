import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable()
export class CategoriesApiService {
    constructor(private _httpService: HttpService) {
    }

    getCategories(): Promise<any> {
        return this._httpService.get("categories");
    }
}
