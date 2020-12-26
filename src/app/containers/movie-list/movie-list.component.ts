import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/share/model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MoviesService } from 'src/app/share/services/movies.service';
import { tap, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';

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

  public myOptions: NgxMasonryOptions = {
    gutter: 10,
    itemSelector: 'app-movie',
    initLayout: true
  };

  constructor(private movieService: MoviesService, private route: ActivatedRoute,) {
    this.filter = 'most-popular';

  }

  ngOnInit() {
    /*this.route.data.subscribe(params => {
      this.filter = params['filter'];
    });*/

    //this.loading$.next(true)


    this.movieList$ = this.route.data.pipe(
      switchMap(params => {
        this.filter = params['filter'];
        return this.makeRequest(this.filter)
      })
    );

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
        break;
      case 'most popular kids':
        return this.getMoviesMostPopularKids()
        break;
      case 'highest-rated':
        return this.getMoviesHighestRated()
        break;
      case 'best-from2020':
        return this.getMoviesBestFrom2020()
        break;
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
