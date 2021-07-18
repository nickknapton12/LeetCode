// Page 109
// Big O()
// Space O()

import { Queue } from '../Stacks and Queues/Queue';

class Graph {
    constructor() {
        var nodes = [];
    }
}

class Node {
    constructor(data) {
        var data = data;
        var marked = false;
        var children = [];
    }
}

function RouteBetweenNodes(graph, S, E){
    if(S === E) return true;
    var que = new Queue();
    S.marked = true;
    que.add(S);

    while(!que.isEmpty()) {
        var r = que.remove();
        if(r != null){
            if(r === E) return true;
            for(node in r.children) {
                if(node.marked == false){
                    node.marked = true;
                    que.add(node);
                }
            }
        }
    }
    return false;
}