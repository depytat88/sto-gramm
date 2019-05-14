import {NgModule} from '@angular/core';
import {SearchComponent} from "./search.component";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {SearchHeaderModule} from "./search-header/search-header.module";

@NgModule({
  imports: [
    MainLayoutModule,
    SearchHeaderModule
  ],
  declarations: [SearchComponent],
})
export class SearchModule {
}
