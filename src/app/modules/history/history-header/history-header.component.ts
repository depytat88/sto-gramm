import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-header',
  templateUrl: './history-header.component.html',
  styleUrls: ['./history-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
