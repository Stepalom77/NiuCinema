import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvEpisodeComponent } from './tv-episode.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvEpisodeComponent}])
  ]
})
export class TvEpisodeModule { }
