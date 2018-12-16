import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'juns-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  @Input("data") data;

  ngOnInit() {
  }

}
