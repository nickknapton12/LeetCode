// Assumes edges are one unidirectional and there are no loops gurenteed (cyclic).

const hasPathDepthFirst = (graph, src, dst) => {
    if(src === dst) return true;

    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst)) return true;
    }
    return false;
}

const hasPathBreadthFirst = (garph, src, dst) => {
    const queue = [ src ];

    while(queue.length > 0) {
        const current = queue.shift();

        if(current === dst) return true;

        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

console.log(hasPathBreadthFirst(graph,'a','f'))