import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie, Genre } from 'src/app/share/model';
import {Observable, BehaviorSubject, Subject, concat } from 'rxjs';
import { MoviesService } from 'src/app/share/services/movies.service';
import {tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

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

  showDetails$: Subject<any> = new Subject<any>();

  filter: string;
  filter$: Subject<string> = new Subject<string>();
  genres: Genre[];

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  public myOptions: NgxMasonryOptions = {
    gutter: 15,
    itemSelector: '.example-card',
    initLayout: true,
    //columnWidth: '20',
    percentPosition: true
  };

  constructor(private movieService: MoviesService, private route: ActivatedRoute,) {
    this.filter = 'most-popular';

  }

  ngOnInit() {

    this.loading$.next(true)

    const filter$ = this.route.data.pipe(
      tap(value => this.filter = value['filter']),
      switchMap(params => genres$)
    );

    const genres$ = this.movieService.getGenre$().pipe(
      tap(value => {
        console.log('genres$', value)
        this.genres = value;
      }),
      switchMap(params => this.movieList$)
    );

    this.movieList$ = this.movieService.getMovies(this.filter).pipe(
      tap(value => console.log('list', value))
    );

    const r$ = concat(filter$, genres$,  this.movieList$);

    r$.subscribe(value => {
      this.masonry.layout();
      this.loading$.next(false);
    })

  }

  makeRequest(filter): Observable<Movie[]> {
    let data = {}
    data['most-popular'] = 'getMoviesMostPopular';
    data['highest-rated'] = 'getMoviesHighestRated';
    data['best-from2020'] = 'getMoviesBestFrom2020';

    //return this.data[filter]();
    switch (filter) {
      case 'most-popular':
        return this.getMoviesMostPopular()
      case 'most popular kids':
        return this.getMoviesMostPopularKids()
      case 'highest-rated':
        return this.getMoviesHighestRated()
      case 'best-from2020':
        return this.getMoviesBestFrom2020()
      default:
        break;
    }
  }

  getMoviesMostPopular(): Observable<Movie[]> {
    return this.movieService.getMoviesMostPopular()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesMostPopularKids(): Observable<Movie[]> {
    return this.movieService.getMoviesMostPopularKids()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesHighestRated(): Observable<Movie[]> {
    return this.movieService.getMoviesHighestRated()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  getMoviesBestFrom2020(): Observable<Movie[]> {
    return this.movieList$ = this.movieService.getMoviesBestFrom2020()
      .pipe(
        tap(() => {
          this.loading$.next(false)
        })
      );
  }

  onMovieDetail(data) {
    console.log(data)
    this.showDetails$.next(data)
  }

}
