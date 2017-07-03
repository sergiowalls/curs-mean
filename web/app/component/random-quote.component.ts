import {Component, OnInit} from "@angular/core";
import {Quote} from "../models/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";

@Component({
    selector: "random-quote",
    template: '<div *ngIf="randomQuote">{{ randomQuote.text }} <button (click) = "onShowRandomQuote()">More</button></div>'
})

export class RandomQuoteComponent implements OnInit {

    quotes: Quote[];
    randomQuote: Quote;

    constructor(private _quoteApiService: QuotesApiService) {
    }

    async ngOnInit() {
        this.quotes = await this._quoteApiService.getQuotes();
        this.onShowRandomQuote();
    }

    onShowRandomQuote() {
        this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
}
