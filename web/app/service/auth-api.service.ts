import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable()
export class AuthApiService {
    constructor(private _httpService: HttpService) {
    }

    postLogin(username: String, password: String):Promise<any> {
        return this._httpService.post("login", {username, password});
    }
}