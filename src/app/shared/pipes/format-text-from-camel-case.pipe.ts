import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTextFromCamelCase',
})
export class FormatTextFromCamelCasePipe implements PipeTransform {
  transform(value: string): unknown {
    return value
      .replace(/([a-z](?=[A-Z]))/g, '$1 ')
      .split(' ')
      .map((word, index) =>
        index === 0
          ? word.at(0).toUpperCase() + word.slice(1)
          : word.at(0).toLowerCase() + word.slice(1)
      )
      .join(' ');
  }
}
