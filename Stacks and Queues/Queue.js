// Queue definition

export class Queue {
    constructor() {
        var first = null;
        var last = null;
    }

    add(item) {
        var node = new QueueNode(item);
        if(last != null) last.next = node;
        last = node;
        if(first == null){
            first = last;
        }
    }

    remove() {
        if(first == null) {
            return null;
        }
        var data = first.data;
        first = first.next
        if(first == null) {
            last = null;
        }
        return data;
    }

    peek() { 
        if(first == null) return null;
        return first.data;
    }
    
    isEmpty() {
        return first == null;
    }
}

class QueueNode{   
    constructor(data) {
        var data = data;
        var next = null;
    }
}