import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToArray'
})
export class MapToArrayPipe implements PipeTransform {

  transform(value): any {
    const arr = [];
    for (const key of value) {
      arr.push({key, value: value[key]});
    }
    return arr;
  }

}
