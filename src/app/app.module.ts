import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from "./modules/home/home.module";
import { HistoryModule } from "./modules/history/history.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { SearchModule } from "./modules/search/search.module";
import { UploaderModule } from "./modules/uploader/uploader.module";
import { NavigateMenuModule } from "./components/navigate-menu/navigate-menu.module";
import { ContainerModule } from "./components/container/container.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HistoryModule,
    ProfileModule,
    SearchModule,
    UploaderModule,
    NavigateMenuModule,
    ContainerModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
