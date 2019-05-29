import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from "./modules/home/home.module";
import {HistoryModule} from "./modules/history/history.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {SearchModule} from "./modules/search/search.module";
import {UploaderModule} from "./modules/uploader/uploader.module";
import {NavigateMenuModule} from "./components/navigate-menu/navigate-menu.module";
import {FooterModule} from "./components/layout/footer/footer.module";
import {AuthenticateModule} from "./modules/authenticate/authenticate.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticateModule,
    HomeModule,
    HistoryModule,
    ProfileModule,
    SearchModule,
    UploaderModule,
    NavigateMenuModule,
    FooterModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
