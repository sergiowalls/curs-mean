import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {

    private isLoggedSource: BehaviorSubject<boolean>;

    constructor(private _cookieService: CookieService) {
        this.isLoggedSource = new BehaviorSubject<boolean>(!!this._cookieService.get("api-token"))
    }

    announceLogin(login: boolean) {
        this.isLoggedSource.next(login);
    }

    getIsLogged() {
        return this.isLoggedSource.asObservable();
    }
}