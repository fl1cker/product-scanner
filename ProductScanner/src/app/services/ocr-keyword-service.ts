import { Injectable } from "@angular/core";
import { KeywordList } from "../models/keyword-list";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root',
})
export class OcrKeywordService {
    keywordMasterList = new BehaviorSubject<KeywordList[]>([]);

    constructor(private storage: Storage) {
        this.loadKeywordListFromStorage();
    }

    loadKeywordListFromStorage() {
        this.storage.get('keywordMasterList').then(result => {
            const keywordList = JSON.parse(result);
            console.log('getting masterList from storage: ', keywordList);
            this.keywordMasterList.next(<KeywordList[]>keywordList || []); // ToDo -- this is not casting like i thought it would
        }).catch(err => {
            console.log('error loading list from storage: ', err);
        })
    }

    updateKeywordListInStorage(newList: KeywordList[]) {
        console.log('JSON.stringify(newList)', JSON.stringify(newList));
        this.storage.set('keywordMasterList', JSON.stringify(newList))
            .then(() => {
                this.loadKeywordListFromStorage();
            })
            .catch(err => {
                console.log('error setting keywordMasterList: ', err);
            });
    }

    getActiveKeywordLists() {
        return this.keywordMasterList.value.filter(x => x.isActive)
    }

    getAllKeywordLists() {
        return this.keywordMasterList.value;
    }

    getSpecificKeywordList(listName: string) {
        return this.keywordMasterList.value.filter(x => x.category === listName);
    }

    addNewKeywordList(listName: string) {
        const newList: KeywordList = {
            category: listName,
            isActive: false,
            values: []
        }

        const localMasterList = this.keywordMasterList.value
        localMasterList.push(newList);

        this.updateKeywordListInStorage(localMasterList);
    }

    removeKeywordList(listIndex: number) {
        const localMasterList = this.keywordMasterList.value;
        localMasterList.splice(listIndex, 1);
        this.updateKeywordListInStorage(localMasterList);

    }

    addKeywordItem(listIndex: number, recordValue: string) {
        const localMasterList = this.keywordMasterList.value;
        localMasterList[listIndex].values.push(recordValue);
        this.updateKeywordListInStorage(localMasterList);

    }

    removeKeywordItem(listIndex: number, keywordIndex: number) {
        const localMasterList = this.keywordMasterList.value;
        localMasterList[listIndex].values.splice(keywordIndex, 1);
        this.updateKeywordListInStorage(localMasterList);
    }

    toggleActiveList(listIndex: number) {
        const localMasterList = this.keywordMasterList.value;
        localMasterList[listIndex].isActive = !localMasterList[listIndex].isActive;
        this.updateKeywordListInStorage(localMasterList);
    }

    getListIndex(listName: string) {
        const index = this.keywordMasterList.value.findIndex(x => x.category === listName);
        return index > -1 ? index : null;
    }

    resetStorage() {
        this.storage.clear().then(() => {
            console.log('cleared all storage');
            this.loadKeywordListFromStorage();
        })
    }
}