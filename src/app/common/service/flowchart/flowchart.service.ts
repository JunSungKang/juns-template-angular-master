import { Injectable, ElementRef } from '@angular/core';

declare var mxGraph: any;
declare var mxHierarchicalLayout: any;

const mx = require('mxgraph')({
  mxImageBasePath: 'assets/lib/mxgraph/images',
  mxBasePath: 'assets/lib/mxgraph'
});

@Injectable({
  providedIn: 'root'
})
export class FlowchartService {    

  constructor() {
  }

  createFlowChart(container: ElementRef){
    const graph = new mx.mxGraph(container.nativeElement);

    try {
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();

      const frame = graph.insertVertex(parent, '1', 'Frame', 0, 0, 70, 30);
      const cab = graph.insertVertex(parent, '2', 'Cab', 0, 0, 70, 30);
      graph.insertEdge(parent, '3', '', frame, cab);

    } finally {
      graph.getModel().endUpdate();
      new mx.mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }
}