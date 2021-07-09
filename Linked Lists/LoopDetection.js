// Page 94
// Two solutions, see below.

class ListNode {
    constructor(val, next = null){
        this.val = val
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    
    push(node){
        if(this.head == null) {
            this.head = new ListNode(node.val);
            return this.head
        }

        var iter = this.head;
        while(iter.next != null){
            iter = iter.next;
        }
        iter.next = new ListNode(node.val);
        return iter.next;
    }
}

// Big O(n)
// Space O(n)
function LoopDetection(list) {
    var listMap = new Map();
    var node = list.head;
    
    while(node != null) {
        node = node.next;
        if(node === list.head) return true;
        if(listMap.get(node) != undefined) return node;
        listMap.set(node, true);
    }
    return false;
}

// Big O(n)?
// Space(1)
function LoopDetection2(list) {
    var node1 = list.head;
    var node2 = list.head;

    while(node2 != null && node2.next != null) {
        node1 = node1.next;
        node2 = node2.next.next;
        if(node1 === list.head || node2 === list.head) return true;
        if(node1 === node2) return node1;
    }

    return false;
}


var list = new LinkedList(new ListNode(3))
list.head.next = new ListNode(5)
list.head.next.next = new ListNode(8)
list.head.next.next.next = new ListNode(5)
list.head.next.next.next.next = new ListNode(10)
list.head.next.next.next.next.next = new ListNode(2)
list.head.next.next.next.next.next.next = list.head

console.log(LoopDetection2(list))