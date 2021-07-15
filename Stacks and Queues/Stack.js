// Definition for a stack to be used for all files in this directory
class Stack {
    constructor() {
        var top = null;
    }

    pop(){
        if(top == null) return null;
        top = top.next;
        return top;
    }

    push(item){
        var node = new StackNode(item);
        node.next = top;
        top = node;
    }

    peek(){
        if(top == null) return null;
        return top.data;
    }

    isEmpty(){
        if(top == null) return true;
        else return false;
    }
}

class StackNode {
    constructor(data) {
        var data = data;
        var next = null;
    }
}