import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {HistoriesModule} from "./histories/histories.module";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {HomeHeaderModule} from "./home-header/home-header.module";
import {PostCardModule} from "./post-card/post-card.module";

@NgModule({
  imports: [
    HistoriesModule,
    MainLayoutModule,
    HomeHeaderModule,
    PostCardModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
