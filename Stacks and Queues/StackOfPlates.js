// page 94
// Big O(n) Where n is the length of the longest list
// Space O(1)

class StackOfPlates {
    constructor(capacity){
        var capacity = capacity;
        var top = null;
    }

    push(item) {
        if(this.top == null){
            this.top = new PlateNode(new Stack())
            this.top.stack.push(item)
            this.top.size += 1;
        }
        else{
            if(this.top.size < capacity){
                this.top.stack.push(item);
                this.top.size += 1;
            }
            else{
                var newStack = new PlateNode(new Stack())
                newStack.next = this.top;
                this.top = newStack;
                this.top.stack.push(item)
                this.top.size += 1;
            }
        }
    }

    pop() {
        if(this.top.size != 0){
            this.top.stack.pop();
            this.top.size -= 1;
        }
        else {
            top = top.next;
            this.top.stack.pop();
            this.top.size -= 1;
        }
    }

    peek() {
        if(this.top.size != 0) return this.top.stack.peek();
        else return this.top.next.stack.peek();
    }
}

class PlateNode{
    constructor(stack) {
        var stack = stack;
        var next = null;
        var size = 0;
    }
}