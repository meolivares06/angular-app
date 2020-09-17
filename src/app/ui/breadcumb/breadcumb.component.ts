import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcumbComponent implements OnInit {
  @Input() option: string;
  constructor() { }

  ngOnInit(): void {
  }

}
