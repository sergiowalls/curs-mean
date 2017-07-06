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
import {AddQuoteComponent} from "./component/add-quote.component";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./component/auth.component";
import {AuthApiService} from "./service/auth-api.service";

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent,
        AddQuoteComponent,
        CategoryListComponent,
        CategoryDetailComponent,
        MovieListComponent,
        MovieDetailComponent,
        AuthComponent
    ],
    providers: [
        QuotesApiService,
        CategoriesApiService,
        MoviesApiService,
        AuthApiService,
        HttpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}