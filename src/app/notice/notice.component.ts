import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'juns-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor() { }
  notice = [
    {
      title: "오픈공지 테스트4",
      summary: "오픈공지 테스트 써머리4"
    },
    {
      title: "오픈공지 테스트3",
      summary: "오픈공지 테스트 써머리3"
    },
    {
      title: "오픈공지 테스트2",
      summary: "오픈공지 테스트 써머리2"
    },
    {
      title: "오픈공지 테스트1",
      summary: "오픈공지 테스트 써머리1"
    }
  ]

  ngOnInit() {
  }

}
