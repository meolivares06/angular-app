import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/share/model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MoviesService } from 'src/app/share/services/movies.service';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList$: Observable<Movie[]>;
  error$: Observable<any>;
  //loading$: Subject<boolean> = new Subject<boolean>()
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  listChanged$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.loading$.next(true)
    this.listChanged$ = this.movieService.listChanged$;
    this.subscribeListChanged()
    this.getMoviesMostPopular()
  }

  subscribeListChanged() {
    this.listChanged$
      .pipe(
        map((value: string) => value.toLowerCase())
      ).subscribe(value => {
        console.log(value)
        switch (value) {
          case 'most popular':
            this.getMoviesMostPopular()
            break;
          case 'most popular kids':
            this.getMoviesMostPopularKids()
            break;
          case 'highest rated':
            this.getMoviesHighestRated()
            break;
          case 'best from 2020':
            this.getMoviesBestFrom2020()
            break;
          default:
            break;
        }
      })
  }

  getMoviesMostPopular() {
    this.movieList$ = this.movieService.getMoviesMostPopular()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesMostPopularKids() {
    this.movieList$ = this.movieService.getMoviesMostPopularKids()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesHighestRated() {
    this.movieList$ = this.movieService.getMoviesHighestRated()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesBestFrom2020() {
    this.movieList$ = this.movieService.getMoviesBestFrom2020()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

}
