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

function Palindrome(list) {
    var letters = new Map();
    node = list.head;    
    while(node != null) {

        
        if(letters.get(node.val) == null) letters.set(node.val, 1) 
        else letters.set(node.val, (letters.get(node.val))+1)
        node = node.next;
    }
    var count = 0;
    letters.forEach((value, key) => {
        if((value % 2) != 0) count++;
    })
    if(count > 1) return false;
    return true;
}


var list = new LinkedList(new ListNode('h'))
list.head.next = new ListNode('e')
list.head.next.next = new ListNode('e')
list.head.next.next.next = new ListNode('e')
list.head.next.next.next.next = new ListNode('e')
list.head.next.next.next.next.next = new ListNode('e')
list.head.next.next.next.next.next.next = new ListNode('h')

console.log(Palindrome(list)); 