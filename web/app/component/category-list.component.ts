import {Component, OnInit} from "@angular/core";
import {CategoriesApiService} from "../service/categories-api.service";
import {Category} from "../model/category.model";
import {Router} from "@angular/router";

@Component({
    selector: "categories",
    template: `
        <ul *ngIf="categories">
            <li *ngFor="let category of categories" (click)="printCategoryName(category)"
                routerLink="/categories/{{category.id}}">
                {{ category.name }}
            </li>
        </ul>`
})

export class CategoryListComponent implements OnInit {
    categories: Category[];

    constructor(private _categoriesApiService: CategoriesApiService, private _router: Router) {
    }

    async ngOnInit() {
        try {
            this.categories = await this._categoriesApiService.getCategories();
        } catch (err) {
            if (err.status === 401) this._router.navigate(["login"])
        }
    }

    printCategoryName(category: Category) {
        console.log(category.name)
    }

}
