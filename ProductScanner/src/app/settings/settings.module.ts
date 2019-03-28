import { NgModule } from "@angular/core";
import { SettingsPage } from "./settings.page";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { KeywordListComponent } from "../keyword-list/keyword-list.component";
import { KeywordRowComponent } from "../keyword-list/keyword-row/keyword-row.component";
import { KeywordItemComponent } from "../keyword-list/keyword-row/keyword-item/keyword-item.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsPage
            }
        ])
    ],
    declarations: [
        SettingsPage,
        KeywordListComponent,
        KeywordRowComponent,
        KeywordItemComponent
    ]
})
export class SettingsPageModule {}