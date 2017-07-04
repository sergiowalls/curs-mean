import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RandomQuoteComponent} from "./component/random-quote.component";
import {QuotesApiService} from "./service/quotes-api.service";
import {CategoriesApiService} from "./service/categories-api.service";
import {CategoryListComponent} from "./component/category-list.component";
import {HttpService} from "./service/http.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {CategoryDetailComponent} from "./component/category-detail.component";
import {MoviesApiService} from "./service/movies-api.service";
import {MovieListComponent} from "./component/movie-list.component";
import {MovieDetailComponent} from "./component/movie-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent,
        CategoryListComponent,
        CategoryDetailComponent,
        MovieListComponent,
        MovieDetailComponent
    ],
    providers: [
        QuotesApiService,
        CategoriesApiService,
        MoviesApiService,
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}