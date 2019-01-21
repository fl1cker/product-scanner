import { Component } from "@angular/core";
import { OcrProviderService } from "../services/ocr-provider.service";

@Component({
    selector: 'ocr-scanner-page',
    templateUrl: './scanner.page.html',
    styleUrls: ['./scanner.page.scss']
})
export class ScannerPage {
    constructor(private OcrProviderService: OcrProviderService) { }

    public async recognize(img): Promise<void> {
      
        //value has the text result
        const value = await this.OcrProviderService.text(img.srcElement, (progress) => {

            //percentage shows the scan progress
            const percentage = Math.round(progress * 100);
            console.log('percentage: ', percentage);
        }).then((x) => {
            console.log('finished with value: ', value);
        }).catch((err) => {
            console.log('errored with :', err)
        })
    }
}