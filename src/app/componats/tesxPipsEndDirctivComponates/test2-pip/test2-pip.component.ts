import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-test2-pip',
  templateUrl: './test2-pip.component.html',
  styleUrls: ['./test2-pip.component.css']
})
export class Test2PipComponent implements OnInit {

  allTheDetails =new  FormGroup( {
        FirstName:new FormControl(),
        LastName:new FormControl(),
        City:new FormControl(),
        Street:new FormControl(),
        buildingNumber:new FormControl(),
        CellPhone:new FormControl(),
        Miles:new FormControl()}
      )
  constructor() { }

  ngOnInit() {
  }
}
