import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { MovieComponent } from './movie/movie.component';
import { TvSerieComponent } from './tv-serie/tv-serie.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { TvSerieReviewsComponent } from './tv-serie-reviews/tv-serie-reviews.component';
import { ReviewComponent } from './review/review.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TvEpisodesComponent } from './tv-episodes/tv-episodes.component';
import { TvEpisodeComponent } from './tv-episode/tv-episode.component';
import { TvEpisodeReviewsComponent } from './tv-episode-reviews/tv-episode-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    TvSeriesComponent,
    MovieComponent,
    TvSerieComponent,
    MovieReviewsComponent,
    TvSerieReviewsComponent,
    ReviewComponent,
    UserProfileComponent,
    TvEpisodesComponent,
    TvEpisodeComponent,
    TvEpisodeReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
