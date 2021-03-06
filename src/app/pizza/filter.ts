
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (!value || !filterString) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (!!item[propName] && item[propName].indexOf(filterString) !== -1) {
        resultArray.push(item);
      }
    }
    console.log('result arr')
    return resultArray;
  }
}
