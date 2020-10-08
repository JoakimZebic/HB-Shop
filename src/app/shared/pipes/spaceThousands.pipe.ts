import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'spaceThousands',
})
export class SpaceThousandsPipe extends DecimalPipe implements PipeTransform {
  transform(value: any, digits?: string): string {
    return super.transform(value, digits).replace(/,/g, ' ');
  }
}
