import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/share/model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MoviesService } from 'src/app/share/services/movies.service';
import { catchError, tap } from 'rxjs/operators';
import { TruncatePipe } from "../../share/pipe/truncate.pipe";


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
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.loading$.next(true)
    this.movieList$ = this.movieService.getMovies()
      .pipe(

        tap(() => {
          this.loading$.next(false)
        }),
        catchError(this.movieService.handleError)
      );
  }

}
