import { Component, OnInit } from '@angular/core';

import { DateService } from '../../common/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private date: DateService) { }

  ngOnInit() {
    console.log();
  }

  public chartLabels:string[] = ["SouthKorea", "USA", "Japan", "China", "Canada"];
  public chartData:number[] = [21, 39, 10, 14, 16];
  public chartType:string = 'line';
  public chartLineTypeOptions:any = {
    maintainAspectRatio: false,
    'backgroundColor': [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ],
    title: {
      display: true,
      text: '[ ' +this.chartType+ ' Chart ]'
    }
  };

  public chartPieTypeOptions:any = {
    maintainAspectRatio: false,
    'backgroundColor': [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ],
    title: {
      display: true,
      text: '[ ' +this.chartType+ ' Chart ]'
    }
  };

  data = {
    "th": ["ProductID", "ProductName", "RecipeName", "RecipeType", "Register", "CreateDate", "DeleteDate"],
    "tr": [
      ["PRE-01", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-02", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""],
      ["PRE-03", "Monitor", "AZ-02", "OUT", "JHKIM", "2018.12.16.", "2018.12.17."],
      ["PRE-04", "Monitor", "AZ-02", "OUT", "JHKIM", "2018.12.16.", "2018.12.17."],
      ["PRE-05", "Monitor", "AZ-01", "IN", "JSKANG", "2018.12.16.", ""]
    ]
  }

  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

}
