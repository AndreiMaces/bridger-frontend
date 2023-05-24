import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: object): any {
    if (value) {
      return Object.keys(value).map((key) => {
        // @ts-ignore
        return { key: key, value: value[key] };
      });
    }
  }
}
