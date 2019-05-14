import {NgModule} from '@angular/core';
import {UploaderComponent} from "./uploader.component";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {UploaderHeaderModule} from "./uploader-header/uploader-header.module";

@NgModule({
  imports: [
    MainLayoutModule,
    UploaderHeaderModule
  ],
  declarations: [UploaderComponent],
})
export class UploaderModule {
}
