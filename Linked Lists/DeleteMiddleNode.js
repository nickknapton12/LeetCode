// Page 94
// Big O(1)
// Space O(1)

class ListNode {
    constructor(val, next = null){
        this.val = val
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}


function DeleteMiddleNode(node){
    if(node.next == null || node == null) return false;

    node.val = node.next.val;
    node.next = node.next.next;
}


var list = new LinkedList(new ListNode(1))
list.head.next = new ListNode(2)
list.head.next.next = new ListNode(6)
list.head.next.next.next = new ListNode(1)
list.head.next.next.next.next = new ListNode(3)
list.head.next.next.next.next.next = new ListNode(88)
list.head.next.next.next.next.next.next = new ListNode(2)
list.head.next.next.next.next.next.next.next = new ListNode(5)

DeleteMiddleNode(list.head.next.next.next.next.next.next.next); // Node with val 1

var iter = list.head

while(iter != null){
    console.log(iter.val);
    iter = iter.next;
}