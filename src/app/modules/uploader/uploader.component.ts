import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
