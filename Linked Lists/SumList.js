// page 94
// Big O(n) Where n is the length of the longest list
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


function SumList(list1, list2) {
    var node1 = list1.head;
    var node2 = list2.head;
    var carry = 0;
    var sumList = new LinkedList();
    var node;

    while(node1 != null && node2 != null) {
        if(node1 == null) {
            node = AddNodes(new ListNode(0), node2, 0);
            carry = node[1];
            node = node[0];
            node2 = node2.next;
        } 
        else if(node2 == null) {
            node = AddNodes(node1, new ListNode(0), 0);
            carry = node[1];
            node = node[0];
            node1 = node1.next;
        }
        else {
            node = AddNodes(node1, node2, carry)
            carry = node[1];
            node = node[0];
            node1 = node1.next;
            node2 = node2.next;
        }
        if(sumList.head == null) sumList.head = node;
        else sumList.push(node);
    }

    if(carry != 0) sumList.push(new ListNode(carry))

    return sumList;
}

function AddNodes(node1, node2, carry) { 
    var val = node1.val + node2.val + carry;
    carry = 0;
    if(val >= 10){
        val -= 10;
        carry = 1;
    }
    return [new ListNode(val), carry];
}


var list1 = new LinkedList(new ListNode(7))
list1.head.next = new ListNode(1)
list1.head.next.next = new ListNode(6)
var list2 = new LinkedList(new ListNode(9))
list2.head.next = new ListNode(9)
list2.head.next.next = new ListNode(9)

var newlist = SumList(list1, list2);

var iter = newlist.head;

while(iter != null){
    console.log(iter.val);
    iter = iter.next;
}