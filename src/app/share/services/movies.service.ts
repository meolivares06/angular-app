import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie, Response, Genre, ResponseGenre } from 'src/app/share/model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";

import { environment } from "../../../environments/environment";


const { url, url_base, apiKey, most_popular, most_popular_kids, highest_rated, best_from_2020, poster_size, count, url_genre } = environment;
/* Base url form the configuration API */
const base_url_image = 'http://image.tmdb.org/t/p/';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  listChanged$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) { }

  changeList(option: string): void {
    this.listChanged$.next(option)
  }

  getGenre(): Observable<Genre[]> {
    return this.http.get<ResponseGenre>(url_genre).pipe(
      tap(r => console.log(r)),
      map((r: ResponseGenre) => r.genres),
      catchError(this.handleError<Genre[]>('getMovies', []))
    )
  }

  getMovies(filter): Observable<Movie[]> {
    console.group("getMovies")
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
    console.groupEnd()
  }

  getMoviesMostPopular(): Observable<Movie[]> {
    console.group("getMoviesMostPopular")
    let url2 = url_base + most_popular;
    if (apiKey != '') {
      url2 += `&api_key=${apiKey}`
    }
    return this.http.get<Response>(url2)
      .pipe(
        /* I want Only a few items for saving time  */
        map((response: Response) => response.results.slice(0, count)),

        /* I must transform the poster_path property to adapt it with the API */
        map((results: Movie[]) => results.map(r => {
          const changed = { ...r, poster_path: base_url_image + poster_size + r.poster_path }
          return changed
        })),

        catchError(this.handleError<Movie[]>('getMovies', []))
      )

    console.groupEnd()
  }

  getMoviesHighestRated(): Observable<Movie[]> {
    return this.http.get<Response>(url_base + highest_rated + `&api_key=${apiKey}`)
      .pipe(
        /* I want Only a few items for saving time  */
        map((response: Response) => response.results.slice(0, count)),

        /* I must transform the poster_path property to adapt it with the API */
        map((results: Movie[]) => results.map(r => {
          const changed = { ...r, poster_path: base_url_image + poster_size + r.poster_path }
          return changed
        })),

        catchError(this.handleError<Movie[]>('getMovies', []))
      )
  }

  getMoviesMostPopularKids(): Observable<Movie[]> {
    return this.http.get<Response>(url_base + most_popular_kids + `&api_key=${apiKey}`)
      .pipe(
        /* I want Only a few items for saving time  */
        map((response: Response) => response.results.slice(0, count)),

        /* I must transform the poster_path property to adapt it with the API */
        map((results: Movie[]) => results.map(r => {
          const changed = { ...r, poster_path: base_url_image + poster_size + r.poster_path }
          return changed
        })),

        catchError(this.handleError<Movie[]>('getMovies', []))
      )
  }

  getMoviesBestFrom2020(): Observable<Movie[]> {
    return this.http.get<Response>(url_base + best_from_2020 + `&api_key=${apiKey}`)
      .pipe(
        /* I want Only a few items for saving time  */
        map((response: Response) => response.results.slice(0, count)),

        /* I must transform the poster_path property to adapt it with the API */
        map((results: Movie[]) => results.map(r => {
          const changed = { ...r, poster_path: base_url_image + poster_size + r.poster_path }
          return changed
        })),

        catchError(this.handleError<Movie[]>('getMovies', []))
      )
  }


  handleError<T>(operation, result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

  log(msg: string) {
    console.log(msg)
  }

}
