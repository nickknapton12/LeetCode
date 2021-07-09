// page 94
// Big O(n)
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

function ReturnKthToLast(list, k){
    var iter1 = list.head;
    var iter2 = list.head;

    for(let i = 0; i < k; i++){
        if(iter1 == null){
            return -1;
        }
        iter1 = iter1.next;
    }

    while(iter1 != null){
        iter1 = iter1.next;
        iter2 = iter2.next;
    }

    return iter2.val;
}


var list = new LinkedList(new ListNode(1))
list.head.next = new ListNode(2)
list.head.next.next = new ListNode(6)
list.head.next.next.next = new ListNode(1)
list.head.next.next.next.next = new ListNode(3)
list.head.next.next.next.next.next = new ListNode(88)
list.head.next.next.next.next.next.next = new ListNode(2)
list.head.next.next.next.next.next.next.next = new ListNode(5)

console.log(ReturnKthToLast(list, 19));