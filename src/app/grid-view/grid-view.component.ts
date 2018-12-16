import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  constructor() { }
  data = {
    "th": ["ProductID", "ProductName", "RecipeName", "RecipeType", "Register", "CreateDate", "DeleteDate"],
    "tr": [
      ["PRE-01", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-02", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-03", "Monitor", "AZ-02", "OUT", "JHKIM", "2018.12.16.", "2018.12.17."],
      ["PRE-04", "Monitor", "AZ-02", "OUT", "JHKIM", "2018.12.16.", "2018.12.17."],
      ["PRE-05", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-06", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-07", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-08", "Monitor", "AZ-02", "OUT", "JHKIM", "2018.12.16.", "2018.12.17."],
    ]
  }

  ngOnInit() {
  }

}
