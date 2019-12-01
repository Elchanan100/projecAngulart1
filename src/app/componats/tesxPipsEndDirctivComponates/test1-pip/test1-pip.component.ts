import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-test1-pip',
  templateUrl: './test1-pip.component.html',
  styleUrls: ['./test1-pip.component.css']
})
export class Test1PipComponent implements OnInit {
  array =[
    {name:'elchanan',yearOfBirth:1992 },
    {name:'pnina',yearOfBirth:1993 },
    {name:'yosi',yearOfBirth:2015 },
    {name:'yonatan',yearOfBirth:2017 }
  ]
  name=new FormControl()
  phone=new FormControl()
  constructor() { }

  ngOnInit() {
  }
  enteFormrInTable(){
    if(this.name.value!=''&&this.phone.value!=''){
    document.querySelector('.myTrOfTableOfNameAndPoane').innerHTML+=`<tr><td>${this.name.value}</td><td>${this.phone.value}</td></tr>`
    this.name.setValue('')
    this.phone.setValue('')}
  }
}
