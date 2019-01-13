import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrProviderService {

  private readonly tesseract;

  constructor() {
    console.log('Hello OcrProviderService');

    this.tesseract = Tesseract.create({
      langPath: '/assets/lib/tesseract.js-',
      corePath: '/assets/lib/tesseract.js-core_0.1.0.js',
      workerPath: '/assets/lib/tesseract.js-worker_1.0.10.js',
    })
   }

   public recognizeText(image) {
    const tesseractConfig = {
      lang: 'eng',
      tessedit_char_whitelist: ' 0123456789',
    };

    return new Promise<string>((resolve, reject) => {
      this.tesseract.recognize(image)
      .progress(v => console.log(v))
      .catch(err => reject(err))
      .then(result => resolve(result.text))
    })
  
      // Result contains these elements:
      // blocks: Array
      // confidence: 0 - 100
      // html: string
      // lines: string[]
      // oem: "DEFAULT"
      // paragraphs: string[]
      // psm: "SINGLE_BLOCK"
      // symcbols: Array
      // text: string
      // version: "3.04.00"
      // words: string[]

      // I chose to use a regex to find the
      // correct format out of result.text
   }
}
