import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { NgxMasonryModule } from 'ngx-masonry';

import { MovieListComponent } from "./containers/movie-list/movie-list.component";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { TruncatePipe } from './share/pipe/truncate.pipe';
import { GenrePipe } from './share/pipes/genre.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TruncatePipe,
    GenrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    MaterialModule,
    HttpClientModule,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
