import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
