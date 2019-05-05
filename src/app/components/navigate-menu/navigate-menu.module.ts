import { NgModule } from '@angular/core';
import { NavigateMenuComponent } from "./navigate-menu.component";
import { AppRoutingModule } from "../../app-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports:      [ AppRoutingModule, CommonModule ],
  declarations: [ NavigateMenuComponent ],
  exports: [ NavigateMenuComponent ],
})
export class NavigateMenuModule {}
