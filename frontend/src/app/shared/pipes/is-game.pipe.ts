import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isGame'
})
export class IsGamePipe implements PipeTransform {

  transform(value: any): unknown {
    return true;
  }

}
