import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myT'
})
export class MyTPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
