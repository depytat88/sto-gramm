import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
