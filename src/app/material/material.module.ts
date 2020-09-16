import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
