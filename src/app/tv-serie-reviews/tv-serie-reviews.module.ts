import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvSerieReviewsComponent } from './tv-serie-reviews.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvSerieReviewsComponent}])
  ]
})
export class TvSerieReviewsModule { }
