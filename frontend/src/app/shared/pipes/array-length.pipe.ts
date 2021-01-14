import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLength',
  pure: false
})
export class ArrayLengthPipe implements PipeTransform {

  transform(value: any): number {
    return (value) ? value.length : 0;
  }

}
