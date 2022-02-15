import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'military'
})
export class MilitaryTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value !== 'string'){
      return value;
    }
    const time = value;

    var hours = Number(time)/100;

    var timeValue;

    timeValue = "" + hours + ":00";
    return timeValue;
  }

}
