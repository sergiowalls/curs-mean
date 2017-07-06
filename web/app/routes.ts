import {Routes} from "@angular/router";
import {CategoryListComponent} from "./component/category-list.component";
import {CategoryDetailComponent} from "./component/category-detail.component";
import {MovieListComponent} from "./component/movie-list.component";
import {MovieDetailComponent} from "./component/movie-detail.component";
import {RandomQuoteComponent} from "./component/random-quote.component";
import {AuthComponent} from "./component/auth.component";

export const appRoutes: Routes = [
    {path: "", component: RandomQuoteComponent},
    {path: "categories", component: CategoryListComponent},
    {path: "categories/:id", component: CategoryDetailComponent},
    {path: "movies", component: MovieListComponent},
    {path: "movies/:id", component: MovieDetailComponent},
    {path: "login", component: AuthComponent}
];
