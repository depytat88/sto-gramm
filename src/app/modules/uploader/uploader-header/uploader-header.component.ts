import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-uploader-header',
  templateUrl: './uploader-header.component.html',
  styleUrls: ['./uploader-header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploaderHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
