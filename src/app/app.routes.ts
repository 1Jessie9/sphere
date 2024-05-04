import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'movies',
        component: MoviesComponent,
    },
    {
        path: 'series',
        component: SeriesComponent,
    },
    {
        path: 'favorites',
        component: FavoritesComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home',
    }
];