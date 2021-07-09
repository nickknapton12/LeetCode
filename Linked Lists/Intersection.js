// Page 94
// Big O(n + m) where n is length of first list and m is length of second list
// Space O(n)

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


function Intersection(list1, list2) {
    var nodeMap = new Map();
    var node1 = list1.head
    while(node1 != null) {
        nodeMap.set(node1, true);
        node1 = node1.next;
    }
    var node2 = list2.head;
    while(node2 != null) {
        if(nodeMap.get(node2) != undefined) return node2;
        node2 = node2.next;
    }
    return false;
}


var list1 = new LinkedList(new ListNode(1))
list1.head.next = new ListNode(2)
list1.head.next.next = new ListNode(6)
list1.head.next.next.next = new ListNode(1)
list1.head.next.next.next.next = new ListNode(3)
list1.head.next.next.next.next.next = new ListNode(88)
list1.head.next.next.next.next.next.next = new ListNode(2)
list1.head.next.next.next.next.next.next.next = new ListNode(5)

var list2 = new LinkedList(new ListNode(1))
list2.head.next = new ListNode(2)
list2.head.next.next = new ListNode(6)
list2.head.next.next.next = new ListNode(1)
list2.head.next.next.next.next = new ListNode(5)
list2.head.next.next.next.next.next = new ListNode(88)
list2.head.next.next.next.next.next.next = new ListNode(2)
list2.head.next.next.next.next.next.next.next = new ListNode(5)

var node = Intersection(list1,list2); // Node with val 1

console.log(node)