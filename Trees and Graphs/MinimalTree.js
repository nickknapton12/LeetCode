// Page 109
// Big O()
// Space O()

class Tree {
    constructor() {
        var root;
    }
}

class TreeNode {
    constructor(thedata){
        this.data = thedata;
        this.leftChild = null;
        this.rightChild = null;
    }
}

function BuildMinTree(arr) {
    if(arr.length <= 1){
        return new TreeNode(arr[0]);
    }
    var middle = Math.floor(arr.length / 2);
    var node = new TreeNode(arr[middle]);
    console.log(node.data)
    node.leftChild = BuildMinTree(arr.slice(0,middle));
    node.rightChild = BuildMinTree(arr.slice(middle + 1, arr.length))
    return node;
}

var arr = [1,4,6,11,24,55,100,535,2323]

var root = BuildMinTree(arr);

console.log(root.data);