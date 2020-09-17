import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  option = 'Most popular'

  onSetOption(option: string): void {
    console.log(option)
    this.option = option
  }
}
