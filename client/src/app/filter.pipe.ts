import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,name:string): any[] 
  {
    const result:any = [];
    if(!value || filterString==='' || name ==='')
    {
      return value;
    }
    value.forEach((crit:any)=>
    {
      if(crit[name].trim().toLowerCase().includes(filterString.toLowerCase()))
      {
        result.push(crit);
      }
    });
    return result;
  }

}
