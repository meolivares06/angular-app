import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-option',
  templateUrl: './button-option.component.html',
  styleUrls: ['./button-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonOptionComponent implements OnInit {
  @Input() option: string;
  @Output() set_option: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  setOption(): void {
    this.set_option.emit(this.option)
  }

}
