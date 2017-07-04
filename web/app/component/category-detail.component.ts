import {Component, OnDestroy, OnInit} from "@angular/core";
import {CategoriesApiService} from "../service/categories-api.service";
import {Category} from "../model/category.model";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "category",
    template: '<div>{{ category.name }}</div>'
})

export class CategoryDetailComponent implements OnInit, OnDestroy {
    category: Category;
    _routeSubscription: Subscription;

    constructor(private _route: ActivatedRoute, private _categoriesApiService: CategoriesApiService) {
    }

    async ngOnInit() {
        this._routeSubscription = this._route.params.subscribe(async param => {
            console.log(param.id);
            this.category = await this._categoriesApiService.getCategoryById(param.id)
        });
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe();
    }
}
