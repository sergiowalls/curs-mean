import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RandomQuoteComponent} from "./component/random-quote.component";
import {QuotesApiService} from "./service/quotes-api.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent
    ],
    providers: [
        QuotesApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}