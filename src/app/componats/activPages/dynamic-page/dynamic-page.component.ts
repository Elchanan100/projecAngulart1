import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {
   userPeth:string = 'https://jsonplaceholder.typicode.com/users/'
  currentUser:any
  myUser:{ "id": number,"name": string,"username": string,"email": string,}
  constructor(public activatedRoute:ActivatedRoute ,public http:HttpClient) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe(prmz => {
        console.log(prmz);
          this.currentUser = prmz.id
          console.log("prmz.id = "+prmz.id +"  this.currentUser = "+this.currentUser+"  this.userPeth + this.currentUser = "+  this.userPeth + this.currentUser );
          this.http.get(this.userPeth + this.currentUser)
                .subscribe(myDaya=>{
                  this.myUser = myDaya as { "id": number,"name": string,"username": string,"email": string,}
                  console.log('this.myUser'+this.myUser);
                  
              })
        })
  }

}