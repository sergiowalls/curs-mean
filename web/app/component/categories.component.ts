import {Component, OnInit} from "@angular/core";
import {CategoriesApiService} from "../service/categories-api.service";
import {Category} from "../model/category.model";

@Component({
    selector: "categories",
    template: '<ul *ngIf="categories"><li *ngFor="let category of categories" (click)="printCategoryName(category)">{{ category.name }}</li></ul>'
})

export class CategoriesComponent implements OnInit {
    categories: Category[];

    constructor(private _categoriesApiService: CategoriesApiService) {
    }

    async ngOnInit() {
        this.categories = await this._categoriesApiService.getCategories();
    }

    printCategoryName(category: Category) {
        console.log(category.name)
    }

}
