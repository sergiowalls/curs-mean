import {Routes} from "@angular/router";
import {CategoryListComponent} from "./component/category-list.component";
import {CategoryDetailComponent} from "./component/category-detail.component";
import {MovieListComponent} from "./component/movie-list.component";
import {MovieDetailComponent} from "./component/movie-detail.component";

export const appRoutes: Routes = [
    {path: "", component: MovieListComponent},
    {path: "categories/:id", component: CategoryDetailComponent},
    {path: "movies", component: MovieListComponent},
    {path: "movies/:id", component: MovieDetailComponent}
];
