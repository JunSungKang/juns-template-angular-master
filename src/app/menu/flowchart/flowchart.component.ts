import {OnInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

import { FlowchartService } from '../../common/service';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent implements OnInit, AfterViewInit  {

  @ViewChild('container', { static: false }) container: ElementRef;
  flowchart: FlowchartService;
  constructor(flowchart: FlowchartService) {
    this.flowchart = flowchart;
  }
  
  ngOnInit(): void {
  }

  // View 가 모두 준비된 이 후, 플로우차트 그리기
  ngAfterViewInit(): void {
    this.flowchart.createFlowChart(this.container);
  }

}
