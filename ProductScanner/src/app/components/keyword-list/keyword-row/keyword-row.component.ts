import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'ps-keyword-row',
    templateUrl: './keyword-row.component.html',
    styleUrls: ['./keyword-row.component.scss']
})
export class KeywordRowComponent { 
    @Input() keywordValue: string;
    @Output() deleteEmitter = new EventEmitter<null>();

    constructor() { }

    deleteRecord() {
        this.deleteEmitter.emit();
    }
}