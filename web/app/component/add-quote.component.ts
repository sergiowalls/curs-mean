import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";
import {Category} from "../model/category.model";
import {CategoriesApiService} from "../service/categories-api.service";

@Component({
    selector: 'add-quote',
    template: `
        <div *ngIf="formIsOpen">
            <div>
                <textarea placeholder="Text" [(ngModel)]="quote.text" minlength="3" required #text="ngModel"></textarea>
                <label *ngIf="text.invalid && text.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Movie" [(ngModel)]="quote.movie" required #movie="ngModel"></textarea>
                <label *ngIf="movie.invalid && movie.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Character" [(ngModel)]="quote.character" required
                          #character="ngModel"></textarea>
                <label *ngIf="character.invalid && character.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Year" [(ngModel)]="quote.year" minlength="4" maxlength="4" required
                          #year="ngModel"></textarea>
                <label *ngIf="year.invalid && year.dirty">This field is obligatory</label>
            </div>
            <div>
                <select required name="category" [(ngModel)]="quote.category_id" #category="ngModel">
                    <option *ngFor="let category of categories" value="{{category.id}}">{{ category.name }}</option>
                </select>
                <label *ngIf="category.invalid && category.dirty">This field is obligatory</label>
            </div>
            <button (click)="saveQuote()">Save</button>
        </div>
        <p>{{ status }}</p>
    `
})

export class AddQuoteComponent implements OnInit {

    quote: Quote;
    private formIsOpen: boolean;
    private status: string;
    categories: Category[];

    @Output() onSubmitted = new EventEmitter<Quote>();

    constructor(private _quoteApiService: QuotesApiService, private _categoryApiService: CategoriesApiService) {
        this.formIsOpen = false;
    }

    async ngOnInit() {
        this.quote = new Quote();
        this.categories = await this._categoryApiService.getCategories();
    }

    openForm() {
        this.formIsOpen = true;
        this.status = "";
    }

    closeForm() {
        this.formIsOpen = false;
    }

    async saveQuote() {
        console.log("Text: " + this.quote.text + "\n" + "Character: " + this.quote.character + "\n"
            + "Movie: " + this.quote.movie + "\n" + "Year: " + this.quote.year);
        try {
            await this._quoteApiService.postQuote(this.quote);
            this.status = "Successfully";
            this.onSubmitted.emit(this.quote);
        } catch (err) {
            this.status = err.statusText;
            console.log(err);
        }
    }

}

