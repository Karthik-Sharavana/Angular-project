import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit 
{
  pageTitle = "Meeting Applictaion";

  constructor() { }
  
  ngOnInit() {}

  // changeText1: boolean = false;
  // changeText2: boolean = false;
  // changeText3: boolean = false;

  // toggle()
  // {
  //   this.changeText1 =! this.changeText1;
  //   this.changeText2 =! this.changeText2;
  //   this.changeText3 =! this.changeText3;
  // }
}
