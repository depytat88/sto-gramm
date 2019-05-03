import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HistoriesModule } from "./histories/histories.module";

@NgModule({
  imports:      [ HistoriesModule ],
  declarations: [ HomeComponent ],
})
export class HomeModule { }
