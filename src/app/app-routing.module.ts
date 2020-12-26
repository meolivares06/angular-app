import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './ui/movie-detail/movie-detail.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'most-popular',
    component: MovieListComponent,
    data: {
      filter: 'most-popular'
    }
  },
  {
    path: 'highest-rated',
    component: MovieListComponent,
    data: {
      filter: 'highest-rated'
    }
  },
  {
    path: 'best-from2020',
    component: MovieListComponent,
    data: {
      filter: 'best-from2020'
    }
  },
  { path: '', redirectTo: '/most-popular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
