import {Component, OnInit} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";

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
                <textarea placeholder="Character" [(ngModel)]="quote.character" required #character="ngModel"></textarea>
                <label *ngIf="character.invalid && character.dirty">This field is obligatory</label>
            </div>
            <div>
                <textarea placeholder="Year" [(ngModel)]="quote.year" minlength="4" maxlength="4" required #year="ngModel"></textarea>
                <label *ngIf="year.invalid && year.dirty">This field is obligatory</label>
            </div>
            <button (click)="saveQuote()">Save</button>
            <p>{{ status }}</p>
        </div>
    `
})

export class AddQuoteComponent implements OnInit {

    quote: Quote;
    formIsOpen: boolean;
    status: string;

    constructor(private _quoteApiService: QuotesApiService) {
        this.formIsOpen = true;
    }

    ngOnInit(): void {
        this.quote = new Quote();
    }

    openForm() {
        this.formIsOpen = true;
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
        } catch (err) {
            this.status = err.statusText;
            console.log(err);
        }
    }

}

