import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HistoriesModule} from "./histories/histories.module";
import {MainLayoutModule} from "../../components/layout/main-layout/main-layout.module";
import {HomeHeaderModule} from "./home-header/home-header.module";
import {PostCardModule} from "./post-card/post-card.module";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HistoriesModule,
        MainLayoutModule,
        HomeHeaderModule,
        PostCardModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
