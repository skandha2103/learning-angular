import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listfilter'
})
export class ListfilterPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if(!value || !search){
      return value;
    }
    else{
      return value.filter(
        (val:any)=>val.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }
  }

}
