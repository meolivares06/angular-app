import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../model';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  genres: Genre[] = [];

  transform(value: number[], data?: any[], ...args: unknown[]): number[] {
    console.log(value)
    console.log(data)
    if (!value || !data)
      return [];
    return value.map((v) => {
      return data.find(d => d.id === v).name});
  }

}
