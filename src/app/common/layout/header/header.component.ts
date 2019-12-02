import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'juns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  keyword: string;

  ngOnInit() {
  }

  search() {
    alert("[" +this.keyword+ "] 검색을 시작합니다.");
  }

}
