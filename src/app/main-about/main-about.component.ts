import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.css']
})
export class MainAboutComponent implements OnInit {

  pageTitle = "Meeting Applictaion";

  constructor() { }

  ngOnInit() {
  }

}
