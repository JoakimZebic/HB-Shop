import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return './' + value;
  }
}
