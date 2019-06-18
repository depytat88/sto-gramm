import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "./modules/home/home.module";
import {HistoryModule} from "./modules/history/history.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {SearchModule} from "./modules/search/search.module";
import {UploaderModule} from "./modules/uploader/uploader.module";
import {ContainerModule} from "./components/container/container.module";
import {MainLayoutModule} from "./components/layout/main-layout/main-layout.module";
import {AuthenticateModule} from "./modules/authenticate/authenticate.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AuthenticateModule,
        HomeModule,
        HistoryModule,
        ProfileModule,
        SearchModule,
        UploaderModule,
        ContainerModule,
        MainLayoutModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
