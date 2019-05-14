import {NgModule} from '@angular/core';
import {MainLayoutComponent} from "./main-layout.component";
import {ContainerModule} from "../../container/container.module";
import {HeaderModule} from "./header/header.module";

@NgModule({
  imports: [
    HeaderModule,
    ContainerModule,
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {
}
