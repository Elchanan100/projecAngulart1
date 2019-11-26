import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-activ',
  templateUrl: './data-activ.component.html',
  styleUrls: ['./data-activ.component.css']
})
export class DataActivComponent implements OnInit {
  myData:{}
  constructor(public ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {this.ActivatedRoute.data.subscribe(data => {
   this.myData  = data as {}
   console.log(this.myData);
  })
  }

}
