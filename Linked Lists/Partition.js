// Page 94
// Big O(n)
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


function Partition(list, x) {
    var small = new LinkedList();
    var big = new LinkedList();
    var smallEnd = new ListNode(null);

    node = list.head;
    while(node != null){
        if(node.val < x){
            smallEnd = small.push(node);
        }
        else{
            big.push(node);
        }
        node = node.next;
    }

    smallEnd.next = big.head;
    return small;
}



var list = new LinkedList(new ListNode(3))
list.head.next = new ListNode(5)
list.head.next.next = new ListNode(8)
list.head.next.next.next = new ListNode(5)
list.head.next.next.next.next = new ListNode(10)
list.head.next.next.next.next.next = new ListNode(2)
list.head.next.next.next.next.next.next = new ListNode(1)

var newList = Partition(list, 5); 

var iter = newList.head

while(iter != null){
    console.log(iter.val);
    iter = iter.next;
}