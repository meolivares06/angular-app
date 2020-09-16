import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie, Response } from 'src/app/share/model';
import { Observable, of } from 'rxjs';
import { map, delay } from "rxjs/operators";

const url = 'http://localhost:3000/response';

/* Base url form the configuration API */
const base_url_image = 'http://image.tmdb.org/t/p/';
/* Poster_size form the configuration API */
const poster_size__small = 'w92'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Response>(url)
      .pipe(
        delay(5000),
        /* I want Only a few items for saving time  */
        map((response: Response) => response.results.slice(0, 2)),

        /* I must transform the poster_path property to adapt it with the API */
        map((results: Movie[]) => results.map(r => {
          const changed = { ...r, poster_path: base_url_image + poster_size__small + r.poster_path }
          return changed
        })),

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
