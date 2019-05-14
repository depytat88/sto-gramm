import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header.component";
import { ContainerModule } from "../../../container/container.module";

@NgModule({
  imports: [ ContainerModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule {
}
