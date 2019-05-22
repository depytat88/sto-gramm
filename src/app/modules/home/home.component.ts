import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {PostModel} from "./post-card/post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  postsList: PostModel[];

  constructor(
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) {
    this.httpService.getJSON().subscribe(
      data => {
        this.postsList = data as PostModel[];
        console.log(this.postsList);
        this.cdr.detectChanges();
      }
    );
  }

  ngOnInit() {

  }

}
