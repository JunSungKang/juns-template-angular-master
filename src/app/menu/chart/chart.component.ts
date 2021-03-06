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
  public chartLabels:string[] = ["SouthKorea", "USA", "Japan", "China", "Canada"];
  public chartData:number[] = [21, 39, 10, 14, 16];
  public chartType:string = 'line';
  public chartOptions:any = {
    maintainAspectRatio: false,
    'backgroundColor': [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ],
    title: {
      display: true,
      text: '[ ' +this.chartType+ ' Chart ]'
    }
  };
  
  public ChartTypeChange(e){
    this.chartType = e.target.value;
    this.chartOptions.title.text = '[ ' +this.chartType+ ' Chart ]';
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
