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


  movie: Movie;
  constructor() {
    this.movie = new Movie()
  }

  ngOnInit(): void {

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
