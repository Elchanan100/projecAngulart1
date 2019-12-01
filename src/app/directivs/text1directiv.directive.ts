import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appText1directiv]'
})
export class Text1directivDirective {
  el:HTMLElement
  constructor(elment:ElementRef ) {
      console.log('appText1directiv');
      this.el=elment.nativeElement
   }
   @HostListener('mouseenter')onMmousEenter(){
     this.hiColor('blue')
   }
     hiColor(color:string){
     if(!color)this.el.style.background='grey'
     else this.el.style.background='blue'
     
   }
}
