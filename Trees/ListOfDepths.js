// Page 109
// Big O()
// Space O()

class Tree {
    constructor(root) {
        this.root = root;
    }
}

class TreeNode {
    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

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

function ListOfDepths(tree){
    var lists = [];
    lists = ListOfDepths2(tree.root, lists, 0)
    return lists;
}

function ListOfDepths2(treeNode, lists, level){
    if(treeNode == null) return null;
    var node = new ListNode(treeNode.data);
    if(lists[level] == undefined){
        lists[level] = new LinkedList(node);
    }else{
       lists[level].push(node);
    }
    console.log(lists)
    ListOfDepths2(treeNode.leftChild, lists, level + 1);
    ListOfDepths2(treeNode.rightChild, lists, level + 1);
    return lists;
}

var tree = new Tree(new TreeNode(1))
tree.root.leftChild = new TreeNode(3)
tree.root.leftChild.leftChild = new TreeNode(6)
tree.root.leftChild.rightChild = new TreeNode(7)
tree.root.leftChild.leftChild.leftChild = new TreeNode(2)
tree.root.rightChild = new TreeNode(9)
tree.root.rightChild.leftChild = new TreeNode(45)
tree.root.rightChild.rightChild = new TreeNode(456)
tree.root.rightChild.leftChild.rightChild = new TreeNode(13)

list = ListOfDepths(tree)