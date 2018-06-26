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
  currentPage = 1;
  noticePage = [];
  noticeView = [];
  noticeAll = [
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈1.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈2.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈3.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈4.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈5.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈6.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈7.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈8.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈9.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈0.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈11.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈22.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈33.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈44.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈55.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈66.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈77.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈88.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈99.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈00.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈111.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈222.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈333.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈444.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈555.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈666.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈777.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈888.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈999.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈000.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈1111.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈2222.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈3333.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈4444.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈5555.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈6666.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈7777.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈8888.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈9999.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈0000.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈11111.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈22222.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." },
      { no: "1", title: "[2018. 06. 20] 광고플랫폼 알파 테스트 오픈33333.", summary: "광고플랫폼 알파 테스트를 오픈합니다. 내부 개발 테스트를 진행, 그리고 버그패치 이후 정식 오픈하도록 하겠습니다." }
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

    document.getElementById("previous").style.display = "none";
    if(this.totalPage > 5 && this.noticePage[4] < this.totalPage){ document.getElementById("next").style.display = "block"; }
    else { document.getElementById("next").style.display = "none"; }
  }

  // 이전 페이지 리스트 보기
  Previous(){
    if(this.noticePage[0] > 5){
      for(let i=0; i<5; i++){
        this.noticePage[i] = this.noticePage[i] - 5;
      }
      document.getElementById("next").style.display = "block";
      if(this.noticePage[0] < 5){
        document.getElementById("previous").style.display = "none";
      }
    }

    this.PageNumClick(this.noticePage[4]);
  }

  // 다음 페이지 리스트 보기
  Next(){
    if(this.noticePage[4] < this.totalPage){
      for(let i=0; i<5; i++){
        this.noticePage[i] = this.noticePage[i] + 5;
      }

      document.getElementById("previous").style.display = "block";
      if(this.noticePage[4] > this.totalPage){
        document.getElementById("next").style.display = "none";
      }
    }

    this.PageNumClick(this.noticePage[0]);
  }

  // 특정 페이지 클릭, 게시글 로드
  PageNumClick(num){
    this.currentPage = num;
    this.noticeView = [];

    if(num == 1){
      for(let i=0; i<this.viewCount; i++){
        if(!this.NoticeAddView(this.noticeAll[this.noticeAll.length-i-1])){ break; }
      }
    }
    else {
      let startNum = this.viewCount * (num-1) + 1;

      for(let i=0; i<this.viewCount; i++){
        if(!this.NoticeAddView(this.noticeAll[this.noticeAll.length-startNum-i])){ break; }
      }
    }
  }

}
