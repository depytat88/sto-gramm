import {NgModule} from '@angular/core';
import {MainLayoutComponent} from "./main-layout.component";
import {ContainerModule} from "../../container/container.module";
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "../footer/footer.module";
import {NavigateMenuModule} from "../../navigate-menu/navigate-menu.module";

@NgModule({
  imports: [
    HeaderModule,
    ContainerModule,
    FooterModule,
    NavigateMenuModule
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {
}
