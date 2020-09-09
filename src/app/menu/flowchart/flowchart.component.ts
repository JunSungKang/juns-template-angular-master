import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FlowchartService } from '../../common/service/flowchart/flowchart.service';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent implements OnInit {

  @ViewChild('container', { static: false }) container: ElementRef;

  constructor(private flowchart: FlowchartService) { }

  ngOnInit() {
    this.flowchart.test(this.container);
  }

}
