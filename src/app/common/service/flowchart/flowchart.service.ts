import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowchartService {
    
    requireMxGrapth: any = undefined;
    container: any = undefined;

    constructor() {
        this.requireMxGrapth = require('./mxClient.min.js');
    }
    
    public test(container: any){
        this.container = container;

        // Checks if the browser is supported
        if (!this.requireMxGrapth.mxClient.isBrowserSupported())
        {
            // Displays an error message if the browser is not supported.
            this.requireMxGrapth.mxUtils.error('Browser is not supported!', 200, false);
        }
        else
        {
            // Disables the built-in context menu
            this.requireMxGrapth.mxEvent.disableContextMenu(this.container);
            
            // Creates the graph inside the given container
            var graph = this.requireMxGrapth.mxGraph(this.container);

            // Enables rubberband selection
            this.requireMxGrapth.mxRubberband(graph);
            
            // Gets the default parent for inserting new cells. This
            // is normally the first child of the root (ie. layer 0).
            var parent = graph.getDefaultParent();
                            
            // Adds cells to the model in a single step
            graph.getModel().beginUpdate();
            try
            {
                var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
                var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
                var e1 = graph.insertEdge(parent, null, '', v1, v2);
            }
            finally
            {
                // Updates the display
                graph.getModel().endUpdate();
            }
        }
    }
}