import {NgModule} from '@angular/core';
import {HistoryComponent} from "./history.component";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {HistoryHeaderModule} from "./history-header/history-header.module";

@NgModule({
  imports: [
    MainLayoutModule,
    HistoryHeaderModule
  ],
  declarations: [HistoryComponent],
})
export class HistoryModule {
}
