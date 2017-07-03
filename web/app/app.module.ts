import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RandomQuoteComponent} from "./component/random-quote.component";
import {QuotesApiService} from "./service/quotes-api.service";
import {CategoriesApiService} from "./service/categories-api.service";
import {CategoriesComponent} from "./component/categories.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent,
        CategoriesComponent
    ],
    providers: [
        QuotesApiService,
        CategoriesApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}