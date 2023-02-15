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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TvEpisodesComponent } from './tv-episodes/tv-episodes.component';
import { TvEpisodeComponent } from './tv-episode/tv-episode.component';
import { TvEpisodeReviewsComponent } from './tv-episode-reviews/tv-episode-reviews.component';
import { MoviesModule } from './movies/movies.module';
import { TvSeriesModule } from './tv-series/tv-series.module';
import { MovieModule } from './movie/movie.module';
import { TvSerieModule } from './tv-serie/tv-serie.module';
import { MovieReviewsModule } from './movie-reviews/movie-reviews.module';
import { TvSerieReviewsModule } from './tv-serie-reviews/tv-serie-reviews.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { TvEpisodesModule } from './tv-episodes/tv-episodes.module';
import { TvEpisodeModule } from './tv-episode/tv-episode.module';
import { TvEpisodeReviewsModule } from './tv-episode-reviews/tv-episode-reviews.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    TvSeriesModule,
    MovieModule,
    TvSerieModule,
    MovieReviewsModule,
    TvSerieReviewsModule,
    UserProfileModule,
    TvEpisodesModule,
    TvEpisodeModule,
    TvEpisodeReviewsModule,
    LoginModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
