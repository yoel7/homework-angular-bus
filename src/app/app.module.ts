import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { BusTripDisplayComponent } from './components/bus-trip-display/bus-trip-display.component';
import { SearchTripComponent } from './components/search-trip/search-trip.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiGitComponent } from './components/api-git/api-git.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'travel', component: SearchTripComponent },
  { path: 'git-api', component: ApiGitComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchTripComponent,
    BusTripDisplayComponent,
    HomeComponent,
    ApiGitComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// exports: [ RouterModule ]
