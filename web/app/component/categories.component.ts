import {Component, OnInit} from "@angular/core";
import {CategoriesApiService} from "../service/categories-api.service";
import {Category} from "../models/category.model";

@Component({
    selector: "categories",
    template: '<ng-container *ngIf="categories"><div *ngFor="let category of categories"><div>{{ category.name }}</div></div></ng-container>'
})

export class CategoriesComponent implements OnInit {
    categories: Category[];

    constructor(private _categoriesApiService: CategoriesApiService) {
    }

    async ngOnInit() {
        this.categories = await this._categoriesApiService.getCategories();
    }

}
