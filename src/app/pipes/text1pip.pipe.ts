import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text1pip'
})
export class Text1pipPipe implements PipeTransform {

  transform(age:number): number {
    let thisYear = new Date().getFullYear()
    return age - thisYear;
  }

}
