import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, n?: number): any {
    return this.truncate(value, n);
  }

  truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '(...)' : str;
  };
}
