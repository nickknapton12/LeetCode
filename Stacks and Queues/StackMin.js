// Page 98
// Big O(1)

class StackMin {
    constructor() {
        var top = null;
    }

    pop(){
        if(top == null) return null;
        
        top = top.next;
        return top;
    }

    push(item){
        var min = item;
        if(!this.isEmpty()){
            min = top.min; 
            if(item < min) min = item
        }
        var node = new StackNodeMin(item, min);
        node.next = top;
        top = node;
        if(min == null) min = item;
        else {
            if(item < min) min = item;
        }
    }

    peek(){
        if(top == null) return null;
        return top.data;
    }

    isEmpty(){
        if(top == null) return true;
        else return false;
    }

    min() {
        return top.min
    }
}

class StackNodeMin {
    constructor(data, min) {
        var data = data;
        var next = null;
        var min = min;
    }
}