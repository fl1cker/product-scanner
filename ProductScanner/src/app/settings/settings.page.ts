import { Component, ChangeDetectorRef } from "@angular/core";
import { KeywordList } from "../models/keyword-list";
import { OcrKeywordService } from "../services/ocr-keyword-service";

@Component({
    selector: 'ocr-settings-page',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
    keywordMasterList: KeywordList[] = [];
    addingList = false;
    addingListValue: string;

    constructor(private changeDetectorRef: ChangeDetectorRef, private ocrKeywordService: OcrKeywordService) { }

    ngOnInit() {
        this.ocrKeywordService.keywordMasterList.subscribe(masterList => {
            this.resetAddList();
            this.keywordMasterList = masterList || [];
            this.detectChanges();
        })
    }

    deleteRecord(listIndex: number, recordIndex: number) {
        this.ocrKeywordService.removeKeywordItem(listIndex, recordIndex);
    }

    addRecord(listIndex: number, recordValue: string) {
        console.log('adding Record to index: ', recordValue, listIndex, this.keywordMasterList[listIndex])
        this.ocrKeywordService.addKeywordItem(listIndex, recordValue);
    }

    toggleActiveList(listIndex: number) {
        this.ocrKeywordService.toggleActiveList(listIndex);
    }

    clickedAddList() {
        this.addingList = true;
    }

    addList() {
        this.ocrKeywordService.addNewKeywordList(this.addingListValue);
    }

    deleteList(listIndex: number) {
        this.ocrKeywordService.removeKeywordList(listIndex);
    }

    resetAddList() {
        this.addingList = false;
        this.addingListValue = '';
        this.detectChanges();
    }

    resetStorage() {
        this.ocrKeywordService.resetStorage();
        this.detectChanges();
    }

    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
}