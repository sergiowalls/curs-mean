import {Component, OnInit, ViewChild} from "@angular/core";
import {Quote} from "../model/quote.model";
import {QuotesApiService} from "../service/quotes-api.service";
import {AddQuoteComponent} from "./add-quote.component";

@Component({
    selector: "random-quote",
    template: `
        <h1>Movie Quotes</h1>
        <div *ngIf="randomQuote">
            <blockquote>
                <p>{{ randomQuote.text }}</p>
            </blockquote>
            <p>{{randomQuote.character}} | {{randomQuote.movie}}</p>
        </div>
        <button (click)="onShowRandomQuote()">More</button>
        <button (click)="addNewQuote()">{{addQuote ? 'Cancel' : 'Add quote'}}</button>
        <add-quote #addQuoteForm (onSubmitted)="onNewQuoteAdded($event)"></add-quote>
    `
})

export class RandomQuoteComponent implements OnInit {

    quotes: Quote[];
    randomQuote: Quote;
    addQuote: boolean;

    @ViewChild(AddQuoteComponent)
    addQuoteForm: AddQuoteComponent;

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
        this.addQuote ? this.addQuoteForm.closeForm() : this.addQuoteForm.openForm();

        this.addQuote = !this.addQuote;
    }

    onNewQuoteAdded(quote: Quote) {
        this.quotes.push(quote);
        this.addQuote = false;
        this.addQuoteForm.closeForm();
    }
}
