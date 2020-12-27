import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from "../../share/model";



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() title = ''
  @Input() overview = ''
  @Input() poster_path = ''
  @Input() backdrop_path = ''
  @Input() release_date = ''
  @Input() genre_ids = []
  @Input() all_genres = []

  @Input('details-link') details_link = ''

  @Output() movie_detail: EventEmitter<Movie> = new EventEmitter<Movie>()
  movie: Movie;
  constructor() {
    this.movie = new Movie()

  }

  ngOnInit(): void {
    console.log(this.genre_ids)
    console.log(this.all_genres)
  }

  onTitleClick(): void {
    this.movieDetail()
  }

  movieDetail(): void {
    this.movie.title = this.title;
    this.movie.overview = this.overview;
    this.movie.poster_path = this.poster_path;

    this.movie_detail.emit(this.movie)
  }

  /*ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName == 'poster_path') {
        const chng = changes[propName];
        chng.currentValue = base_url_image + poster_size__small + chng.currentValue;
        console.log(chng.currentValue)
      }

    }
  }*/


}
