import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'juns-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input("styleOptions") styleOptions;
  @Input("data") data;
  tableStyle = {};
  thStyle = {};
  trStyle = {};

  ngOnInit() {
    if(!this.data){
      this.data = { "th": [], "tr": [] };
      console.error("The '[data]' attribute of '<juns-grid>' is required.");
    }
    if(this.styleOptions["table"]){
      this.tableStyle = this.styleOptions["table"];
    }
    if(this.styleOptions["th"]){
      this.thStyle = this.styleOptions["th"];
    }
    if(this.styleOptions["tr"]){
      this.trStyle = this.styleOptions["tr"];
    }
  }

}
