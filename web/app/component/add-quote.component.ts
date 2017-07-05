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
