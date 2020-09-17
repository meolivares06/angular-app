import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MaterialModule } from '../material/material.module';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { ButtonOptionComponent } from './button-option/button-option.component';



@NgModule({
  declarations: [MovieComponent, BreadcumbComponent, ButtonOptionComponent],
  imports: [
    MaterialModule
  ],
  exports: [MovieComponent, BreadcumbComponent, ButtonOptionComponent]
})
export class UiModule { }
