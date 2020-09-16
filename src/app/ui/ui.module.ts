import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MovieComponent],
  imports: [
    MaterialModule
  ],
  exports: [MovieComponent]
})
export class UiModule { }
