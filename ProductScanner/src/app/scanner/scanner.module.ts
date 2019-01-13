import { NgModule } from "@angular/core";
import { ScannerPage } from "./scanner.page";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: ScannerPage
            }
        ])
    ],
    declarations: [
        ScannerPage
    ]
})
export class ScannerPageModule {}