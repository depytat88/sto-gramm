import {NgModule} from '@angular/core';
import {AuthenticateComponent} from "./authenticate.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthenticateComponent],
  exports: [AuthenticateComponent]
})
export class AuthenticateModule {
}
