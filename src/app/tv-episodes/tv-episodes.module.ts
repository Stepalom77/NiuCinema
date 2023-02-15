import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvEpisodesComponent } from './tv-episodes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TvEpisodesComponent}])
  ]
})
export class TvEpisodesModule { }
