import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:id',
  loadChildren:() => import('./movie/movie.module').then(m => m.MovieModule) },
  {path: 'movie-reviews/:id',
  loadChildren:() => import('./movie-reviews/movie-reviews.module').then(m => m.MovieReviewsModule) },
  {path: 'movies',
  loadChildren:() => import('./movies/movies.module').then(m => m.MoviesModule) },
  {path: 'tv-episode/:id',
  loadChildren:() => import('./tv-episode/tv-episode.module').then(m => m.TvEpisodeModule) },
  {path: 'tv-episode-reviews/:id',
  loadChildren:() => import('./tv-episode-reviews/tv-episode-reviews.module').then(m => m.TvEpisodeReviewsModule) },
  {path: 'tv-episodes/id',
  loadChildren:() => import('./tv-episodes/tv-episodes.module').then(m => m.TvEpisodesModule) },
  {path: 'tv-serie/:id',
  loadChildren:() => import('./tv-serie/tv-serie.module').then(m => m.TvSerieModule) },
  {path: 'tv-serie-reviews/:id',
  loadChildren:() => import('./tv-serie-reviews/tv-serie-reviews.module').then(m => m.TvSerieReviewsModule) },
  {path: 'tv-series',
  loadChildren:() => import('./tv-series/tv-series.module').then(m => m.TvSeriesModule) },
  {path: 'user-profile/:id',
  loadChildren:() => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
  {path: 'login',
  loadChildren:() => import('./login/login.module').then(m => m.LoginModule) },
  {path: 'signup',
  loadChildren:() => import('./signup/signup.module').then(m => m.SignupModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
