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
        this.head = head
    }
}

function RemoveDups(list){
    var vals = new Map()
    vals.set(list.head.val, true);
    var iter = list.head;
    
    while(iter.next != null){
        if(vals.has(iter.next.val)){
            iter.next = iter.next.next;
        }   
        else{
            vals.set(iter.next.val, true);
        }
        iter = iter.next;
    }
    return list;
}

var list = new LinkedList(new ListNode(1))
list.head.next = new ListNode(2)
list.head.next.next = new ListNode(6)
list.head.next.next.next = new ListNode(1)
list.head.next.next.next.next = new ListNode(3)
list.head.next.next.next.next.next = new ListNode(88)
list.head.next.next.next.next.next.next = new ListNode(2)
list.head.next.next.next.next.next.next.next = new ListNode(5)

var newlist = RemoveDups(list);

var iter = newlist.head;

while(iter != null){
    console.log(iter.val);
    iter = iter.next;
}