import {Component} from "@angular/core";

@Component({
    selector: 'add-quote',
    template: `
        <div><textarea placeholder="Text"></textarea>
            <textarea placeholder="Movie"></textarea>
            <textarea placeholder="Character"></textarea>
            <textarea placeholder="Year"></textarea>
            <textarea placeholder="Category"></textarea>
            <button>Save</button>
        </div>
    `
})

export class AddQuoteComponent {

}
