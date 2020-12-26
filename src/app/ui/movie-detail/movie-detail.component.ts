import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from 'src/app/share/model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
