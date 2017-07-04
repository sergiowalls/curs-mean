import {Routes} from "@angular/router";
import {CategoryListComponent} from "./component/category-list.component";
import {CategoryDetailComponent} from "./component/category-detail.component";

export const appRoutes: Routes = [
    {path: "", component: CategoryListComponent},
    {path: "category/:id", component: CategoryDetailComponent}
];
