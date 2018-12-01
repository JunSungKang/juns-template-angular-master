import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  constructor() { }
  data = {
    "th": ["A", "B", "C", "D", "E", "F", "G"],
    "tr": [
      [1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3],
      [4,4,4,4,4,4,4]
    ]
  }

  styleOptions = {
    "borderWeight": 2,
    "table": {
      "width": "100%"
    },
    "th": {
      "text-align": "center",
      "background": "lightyellow"
    },
    "tr": {
      "text-align": "center",
      "background": "white"
    }
  }

  ngOnInit() {
  }

}
