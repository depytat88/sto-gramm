import {NgModule} from '@angular/core';
import {ProfileComponent} from "./profile.component";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {ProfileHeaderModule} from "./profile-header/profile-header.module";

@NgModule({
  imports: [
    MainLayoutModule,
    ProfileHeaderModule
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {
}
