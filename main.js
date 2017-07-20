// ES6 class to represent a regular node
class NodeRepresentation {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left; // The keys to the node's left and right children.
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insertData(data) {
        const newNode = new NodeRepresentation(data); // Represents new node to insert into the tree.
        
        if (this.root === null) {
            this.root = newNode; // If the whole tree is empty, the new node will be inserted as the root node.
        }
    }
}