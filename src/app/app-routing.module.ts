import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { UploaderComponent } from './modules/uploader/uploader.component';
import { HistoryComponent } from './modules/history/history.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'uploader', component: UploaderComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
