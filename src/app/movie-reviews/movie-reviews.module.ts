import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieReviewsComponent } from './movie-reviews.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: MovieReviewsComponent}])
  ]
})
export class MovieReviewsModule { }
