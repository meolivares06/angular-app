import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MaterialModule } from '../material/material.module';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { ButtonOptionComponent } from './button-option/button-option.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [MovieComponent, BreadcumbComponent, ButtonOptionComponent, MovieDetailComponent, PageNotFoundComponent],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [MovieComponent, BreadcumbComponent, ButtonOptionComponent, MovieDetailComponent]
})
export class UiModule { }
