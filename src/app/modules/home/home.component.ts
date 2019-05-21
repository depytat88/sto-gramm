import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  postsList: string;

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) {
    this.httpService.getJSON().subscribe(
      data => {
        this.postsList = data;
        console.log(this.postsList);
        this.cdr.detectChanges();
      }
    );
  }

  ngOnInit() {

  }

}
