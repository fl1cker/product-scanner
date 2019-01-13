import { Component, Input, EventEmitter, Output } from "@angular/core";
import { KeywordList } from "src/app/models/keyword-list";

@Component({
    selector: 'ocr-keyword-list',
    templateUrl: './keyword-list.component.html',
    styleUrls: ['./keyword-list.component.scss']
})
export class KeywordListComponent { 
    
    @Input() keywordList: KeywordList;
    addingRecord = false;
    addedRecordValue = '';
    @Output() readonly deleteRecordEmitter = new EventEmitter<number>();
    @Output() readonly deleteListEmitter = new EventEmitter<null>();
    @Output() readonly addRecordEmitter = new EventEmitter<string>();
    @Output() readonly toggleActiveListEmitter = new EventEmitter<null>();

    deleteRecord(recordIndex: number) {
        this.deleteRecordEmitter.emit(recordIndex);
    }

    clickedAddRow() {
        this.addingRecord = true;
    }

    addRecord() {
        console.log('adding record: ', this.addedRecordValue);
        this.addRecordEmitter.emit(this.addedRecordValue);
        this.resetAddRecord();
    }

    deleteList() {
        this.deleteListEmitter.emit();
    }

    toggleActiveList() {
        this.toggleActiveListEmitter.emit();
    }

    cancelAddRecord() {
        this.addingRecord = false;
        this.addedRecordValue = '';
    }

    resetAddRecord() {
        this.addedRecordValue = '';
        this.addingRecord = false;
    }
}