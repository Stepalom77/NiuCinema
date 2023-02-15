import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvSerieComponent } from './tv-serie.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvSerieComponent}])
  ]
})
export class TvSerieModule { }
