import {NgModule} from '@angular/core';
import {AuthenticateComponent} from "./authenticate.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [AuthenticateComponent],
  exports: [AuthenticateComponent]
})
export class AuthenticateModule {
}
