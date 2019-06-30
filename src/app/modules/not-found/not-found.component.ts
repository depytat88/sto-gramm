import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  wrongPath: string;

  constructor(public activeRoute: ActivatedRoute) {
    this.wrongPath = `"${activeRoute.snapshot.url[0].path}"`;
  }
}
