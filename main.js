// ES6 class to represent a regular node
class NodeRepresentation {
    constructor(data, left = null, right = null) {
        this.data = data; // The data or value of the node.
        this.left = left; // The keys to the node's left and right children.
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    /*
     * Used for inserting new data into the BST.
     */
    insertData(data) {
        const newNode = new NodeRepresentation(data); // Represents new node to insert into the tree.
        
        if (this.root === null) {
            this.root = newNode; // If the whole tree is empty, the new node will be inserted as the root node.
        }
    }
}