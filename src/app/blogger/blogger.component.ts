import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  constructor() { }
  title = "SAMPLE BOX1";
  contents = "sample box contents";

  ngOnInit() {
  }

}
