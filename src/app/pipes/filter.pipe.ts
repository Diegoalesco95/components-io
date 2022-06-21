import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T>(values: T[], text: string = '', field: string): T[] {
    console.log(values);
    console.log(text);

    if (text === '') {
      return values;
    }

    if (!values) {
      return values;
    }

    text = text.toLocaleLowerCase();

    return values.filter((value) => {
      return value[field].toLowerCase().includes(text);
    });
  }
}
