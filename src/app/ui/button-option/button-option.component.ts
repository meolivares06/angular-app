import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-option',
  templateUrl: './button-option.component.html',
  styleUrls: ['./button-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonOptionComponent {
  @Input() link: string;
  @Input() option: string;

  constructor() { }


}
