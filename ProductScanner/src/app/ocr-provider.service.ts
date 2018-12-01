import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrProviderService {

  private tesseract: any;

  constructor() {
    console.log('Hello OcrProviderService');

    this.tesseract = Tesseract.create({
      langPath: '/assets/lib/tesseract.js-',
      corePath: '/assets/lib/tesseract.js-core_0.1.0.js',
      workerPath: '/assets/lib/tesseract.js-worker_1.0.10.js',
    })
   }
}
