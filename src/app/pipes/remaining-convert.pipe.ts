import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingConvert'
})
export class RemainingConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value)
      return '0';
    const today = new Date().getTime();
    const expDate = today + value*1000;
    const diff = Math.round((expDate - today) / (1000 * 3600 * 24));
    const year = Math.floor(diff/365);
    const month = Math.floor(diff/31);
    return  year ? `${year} ${year > 1 ? 'years' : 'year'}`
      : month ? `${month} ${month > 1 ? 'months' : 'month'}`
      : `${diff} ${diff > 1 ? 'days' : 'day'}`;
  }

}
