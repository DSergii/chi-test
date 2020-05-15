import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountFormat'
})
export class AmountFormatPipe implements PipeTransform {

  transform(value: any): any {
    if(!value)
      return;
    if(Number.isNaN(parseFloat(value)))
      return;

    const chunks = [];
    const _value = typeof value === 'string' ? value : value.toString();
    for (let i = _value.length; i > 0; i -= 3) {
      chunks.unshift(_value.substring(i, i - 3));
    }
    return chunks.join(',');
  }

}
