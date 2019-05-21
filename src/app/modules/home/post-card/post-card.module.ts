import {NgModule} from '@angular/core';
import {PostCardComponent} from "./post-card.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent]
})
export class PostCardModule {
}
