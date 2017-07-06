import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";
import {Category} from "../model/category.model";
import {CategoriesApiService} from "../service/categories-api.service";

@Component({
    selector: 'add-quote',
    template: `
        <form *ngIf="formIsOpen" #quoteForm="ngForm">
            <div>
                <textarea placeholder="Text" name="text" [(ngModel)]="quote.text" minlength="3" required
                          #text="ngModel"></textarea>
                <label *ngIf="text.invalid && text.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Movie" name="movie" [(ngModel)]="quote.movie" required
                          #movie="ngModel"></textarea>
                <label *ngIf="movie.invalid && movie.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Character" name="character" [(ngModel)]="quote.character" required
                          #character="ngModel"></textarea>
                <label *ngIf="character.invalid && character.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Year" name="year" [(ngModel)]="quote.year" minlength="4" maxlength="4" required
                          #year="ngModel"></textarea>
                <label *ngIf="year.invalid && year.dirty">This field is obligatory</label>
            </div>
            <div>
                <select required name="category" [(ngModel)]="quote.category_id" #category="ngModel">
                    <option *ngFor="let category of categories" value="{{category.id}}">{{ category.name }}</option>
                </select>
                <label *ngIf="category.invalid && category.dirty">This field is obligatory</label>
            </div>
            <button [disabled]="quoteForm.form.invalid" (click)="saveQuote()">Save</button>
        </form>
        <p>{{ status }}</p>
    `
})

export class AddQuoteComponent implements OnInit {

    quote: Quote;
    private formIsOpen: boolean;
    private status: string;
    private edit: boolean;
    categories: Category[];

    @Output() onSubmitted = new EventEmitter<Quote>();

    constructor(private _quoteApiService: QuotesApiService, private _categoryApiService: CategoriesApiService) {
        this.formIsOpen = false;
    }

    async ngOnInit() {
        this.quote = new Quote();
        this.categories = await this._categoryApiService.getCategories();
    }

    openForm(quote?: Quote) {
        if (quote) {
            this.edit = true;
            this.quote = quote;
        }
        else this.edit = false;
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
            this.edit ? await this._quoteApiService.putQuote(this.quote) : await this._quoteApiService.postQuote(this.quote);
            this.status = "Successfully";
            this.onSubmitted.emit(this.quote);
        } catch (err) {
            this.status = err.statusText;
            console.log(err);
        }
    }

}

