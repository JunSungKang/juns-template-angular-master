import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'app';
  public pieChartLabels:string[] = ["SouthKorea", "USA", "Japan", "China", "Canada"];
  public pieChartData:number[] = [21, 39, 10, 14, 16];
  public pieChartType:string = 'line';
  public pieChartOptions:any = { 'backgroundColor': [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ] };
  
  public ChartTypeChange(e){
    this.pieChartType = e.target.value;
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
