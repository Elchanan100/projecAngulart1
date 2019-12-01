import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  beenToLogin:boolean = false


  constructor(public router:Router) {
    this.router.events.subscribe(data =>{
      console.log('data = '+data)
      if(data instanceof ActivationEnd){
        console.log('LoginServiceService this.beenToLogin = ',this.beenToLogin)
        console.log('LoginServiceService if(data instanceof ActivationEnd)');
        if(!this.router.url.includes('Login')){
          console.log('LoginServiceService if(!this.router.url.includes("Login"')
          if(this.beenToLogin == false){
            console.log('LoginServiceService if(this.beenToLogin==false)')
            console.log('LoginServiceService this.beenToLogin = ',this.beenToLogin)
            this.router.navigateByUrl("Login")
          }
        }else{
          this.beenToLogin=true;
          console.log('LoginServiceService this.beenToLogin = ',this.beenToLogin)
        }
      }
    })
    
    
    // this.router.events
   }
}
