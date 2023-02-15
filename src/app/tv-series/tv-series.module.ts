import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvSeriesComponent } from './tv-series.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvSeriesComponent}])
  ]
})
export class TvSeriesModule { }
