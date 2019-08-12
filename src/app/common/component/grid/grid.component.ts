import {Component, OnInit, Input, Output, EventEmitter, ɵunv} from '@angular/core';

@Component({
  selector: 'juns-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input("data") data;
  @Output("rowClick") rowClickData: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  rowClick(selData){
    let rstData = {};

    for(let i=0; i<selData.length; i++){
      let key = undefined;
      if(this.data.th[i]){
        key = this.data.th[i];
      }
      rstData[key] = selData[i];
    }
    this.rowClickData.emit(rstData);
  }

}
