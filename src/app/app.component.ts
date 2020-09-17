import { Component } from '@angular/core';
import { MoviesService } from './share/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  option = 'Most popular'

  constructor(private movieService: MoviesService) {

  }
  onSetOption(option: string): void {
    console.log(option)
    this.option = option

    this.movieService.changeList(option)
  }
}
