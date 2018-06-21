import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'juns-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor() { }
  boardBottomNum = 0;
  viewCount = 5;
  totalPage = 0;
  noticePage = [];
  noticeView = [];
  noticeAll = [
    { no: "1", title: "1", summary: "111" },
    { no: "2", title: "2", summary: "222" },
    { no: "3", title: "3", summary: "333" },
    { no: "4", title: "4", summary: "444" },
    { no: "5", title: "5", summary: "555" },
    { no: "6", title: "6", summary: "666" },
    { no: "7", title: "7", summary: "777" },
    { no: "8", title: "8", summary: "888" },
    { no: "9", title: "9", summary: "999" },
    { no: "0", title: "0", summary: "000000" },
    { no: "1", title: "1", summary: "111111" },
    { no: "2", title: "2", summary: "222222" },
    { no: "3", title: "3", summary: "333333" },
    { no: "4", title: "4", summary: "444444" },
    { no: "5", title: "5", summary: "555555" },
    { no: "6", title: "6", summary: "666666" },
    { no: "7", title: "7", summary: "777777" },
    { no: "8", title: "8", summary: "888888" },
    { no: "9", title: "9", summary: "999999" },
    { no: "0", title: "0", summary: "000000000" }
  ]

  NoticeAddView(data){
    if(!data){ return false; }
    this.noticeView.push(data);
    return true;
  }

  // 화면 초기화
  ngOnInit() {
    this.totalPage = Math.ceil(this.noticeAll.length/this.viewCount);
    let page = 5;
    if(this.totalPage < 5){ page = this.totalPage; }
    for(let i=1; i<=page; i++){
      this.noticePage.push(i);
    }

    for(let i=0; i<this.viewCount; i++){
      if(!this.NoticeAddView(this.noticeAll[this.noticeAll.length-i-1])){ break; }
    }
  }

  // 이전 페이지 리스트 보기
  Previous(){
    // 최소 페이지인 경우, 이전 페이지 리스트 로드 안함
    if(this.noticePage[0] > 5){
      for(let i=0; i<5; i++){
        this.noticePage[i] = this.noticePage[i] - 5;
      }
    }
  }

  // 다음 페이지 리스트 보기
  Next(){
    // 최대 페이지인 경우, 다음 페이지 리스트 로드 안함
    if(this.noticePage[4] < this.totalPage){
      for(let i=0; i<5; i++){
        this.noticePage[i] = this.noticePage[i] + 5;
      }
    }
  }

  // 특정 페이지 클릭, 게시글 로드
  PageNumClick(num){
    this.noticeView = [];

    // 1페이지 클릭한 경우
    if(num == 1){
      for(let i=0; i<this.viewCount; i++){
        if(!this.NoticeAddView(this.noticeAll[this.noticeAll.length-i-1])){ break; }
      }
    }
    // 1페이지 이외 페이지를 클릭한 경우
    else {
      let startNum = this.viewCount * (num-1) + 1;

      for(let i=0; i<this.viewCount; i++){
        if(!this.NoticeAddView(this.noticeAll[this.noticeAll.length-startNum-i])){ break; }
      }
    }
  }

}
