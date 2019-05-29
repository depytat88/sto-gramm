import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {PostModel} from "./post-card/post.model";
import {JsonFilesUrlsConstants} from "../../constants/json-files-urls.constants";

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
    this.httpService.getJSON(JsonFilesUrlsConstants.POSTS).subscribe(
      data => {
        this.postsList = data as PostModel[];
        this.cdr.detectChanges();
      }
    );
  }

  ngOnInit() {

  }

}
