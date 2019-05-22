import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PostModel} from "./post.model";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent implements OnInit {
  @Input() post: PostModel;

  constructor() {

  }

  ngOnInit() {
    console.log(this.post);
  }
}
