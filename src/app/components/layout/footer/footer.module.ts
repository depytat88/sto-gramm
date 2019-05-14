import { NgModule } from '@angular/core';
import { FooterComponent } from "./footer.component";
import { ContainerModule } from "../../container/container.module";

@NgModule({
  imports: [
    ContainerModule,
  ],
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ]
})
export class FooterModule {
}
