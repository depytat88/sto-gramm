import { NgModule } from '@angular/core';
import { NavigateMenuComponent } from "./navigate-menu.component";
import { AppRoutingModule } from "../../app-routing.module";

@NgModule({
  imports:      [ AppRoutingModule ],
  declarations: [ NavigateMenuComponent ],
  exports: [ NavigateMenuComponent ],
})
export class NavigateMenuModule { }
