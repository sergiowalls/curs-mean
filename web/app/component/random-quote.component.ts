import {Component, OnInit} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";

@Component({
    selector: "random-quote",
    template: `
        <div *ngIf="randomQuote">
            <blockquote>
                <p>{{ randomQuote.text }}</p>
            </blockquote>
            <p>{{randomQuote.character}} | {{randomQuote.movie}}</p>
        </div>
        <button (click)="onShowRandomQuote()">More</button>
        <button (click)="addNewQuote()">{{addQuote ? 'Cancel' : 'Add quote'}}</button>
        <add-quote></add-quote>
    `
})

export class RandomQuoteComponent implements OnInit {

    quotes: Quote[];
    randomQuote: Quote;
    addQuote: boolean;

    constructor(private _quoteApiService: QuotesApiService) {
        this.addQuote = false;
    }

    async ngOnInit() {
        this.quotes = await this._quoteApiService.getQuotes();
        this.onShowRandomQuote();
    }

    onShowRandomQuote() {
        this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }

    addNewQuote() {
        this.addQuote = !this.addQuote;
    }
}
