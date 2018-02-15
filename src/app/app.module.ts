import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { DashboardComponent } from 'app/dashboard/dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    MovielistComponent,
    MovielistComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'movies',component:DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
