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
  
  // 플로우차트 변수
  graph = null;
  parent = null;

  // 추가된 노드 목록들
  nodes = {};

  // 엣지로 연결할 노드를 담아놓는 변수 (1번 배열과 2번 배열을 엣지로 연결)
  selectEdgeInfo = [];

  // 플로우차트 생성
  createFlowChart(container: ElementRef){
    this.graph = new mx.mxGraph(container.nativeElement);

    this.parent = this.graph.getDefaultParent();
    this.graph.getModel().beginUpdate();
    try {
      let node1 = this.graph.insertVertex(this.parent, '1', 'Node1', 0, 0, 50, 50);
      let node2 = this.graph.insertVertex(this.parent, '2', 'Node2', 80, 80, 50, 50);
      let node3 = this.graph.insertVertex(this.parent, '3', 'Node3', 480, 480, 50, 50);

      this.nodes["Node1"] = node1;
      this.nodes["Node2"] = node2;
      this.nodes["Node3"] = node3;

      this.click();
      this.dbClick();
    } finally {
      this.graph.getModel().endUpdate();
      new mx.mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
    }
  }

  // 노드 추가
  addNode(){
    let node = this.graph.insertVertex(this.parent, '1', 'Frame', 0, 0, 70, 30);
    this.nodes["Frame"] = node;
    new mx.mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
  }

  // 엣지 연결
  connectEdge(node1, node2){
    this.graph.insertEdge(this.parent, '3', '', node1, node2);
    new mx.mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
  }

  // 노드 한번 클릭
  click(){
    this.graph.click = (me) => {
      if (!me.state){
        return;
      }

      let id = me.state.cell.value;
      this.selectEdgeInfo.push(id);

      if (this.selectEdgeInfo[0] == this.selectEdgeInfo[1]){
        this.selectEdgeInfo = [];
        return;
      } else if (this.selectEdgeInfo.length == 2){
        let node1 = this.nodes[ this.selectEdgeInfo[0] ];
        let node2 = this.nodes[ this.selectEdgeInfo[1] ];
        this.connectEdge(node1, node2);
        this.selectEdgeInfo = [];
      }
    }
  }

  // 노드 더블 클릭
  dbClick(){
    this.graph.dblClick = (evt, cell) => {
      console.log(evt, cell);
    }
  }
  
  // 선택한 노드&엣지 삭제
  cellRemove(){
    this.graph.removeCells();
    this.selectEdgeInfo = [];
  }
}