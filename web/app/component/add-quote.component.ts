import {Component, OnInit} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";

@Component({
    selector: 'add-quote',
    template: `
        <div *ngIf="formIsOpen"><textarea placeholder="Text" [(ngModel)]="quote.text"></textarea>
            <textarea placeholder="Movie" [(ngModel)]="quote.movie"></textarea>
            <textarea placeholder="Character" [(ngModel)]="quote.character"></textarea>
            <textarea placeholder="Year" [(ngModel)]="quote.year"></textarea>
            <button (click)="saveQuote()">Save</button>
        </div>
    `
})

export class AddQuoteComponent implements OnInit {

    quote: Quote;
    formIsOpen: boolean;

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

    saveQuote() {
        console.log("Text: " + this.quote.text);
        console.log("Character: " + this.quote.character);
        console.log("Movie: " + this.quote.movie);
        console.log("Year: " + this.quote.year);
        this._quoteApiService.postQuote(this.quote);
    }

}
