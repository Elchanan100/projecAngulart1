import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text1pip2'
})
export class Text1pip2Pipe implements PipeTransform {

  transform(areey:{name:string,yearOfBirth:number}[],a:string):{}[]  {
    return areey.filter(data =>data.name.concat(a));
  }
}
