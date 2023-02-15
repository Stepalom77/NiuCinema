import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvEpisodeReviewsComponent } from './tv-episode-reviews.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvEpisodeReviewsComponent}])
  ]
})
export class TvEpisodeReviewsModule { }
