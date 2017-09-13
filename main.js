// ES6 class to represent a regular node

// The node class and the insertion method were taken from this work: https://codepen.io/david_i_smith/pen/egbJjQ

class NodeRepresentation {
    constructor(data, left = null, right = null) {
        this.data = data; // The data or value of the node.
        this.leftNode = left; // The keys to the node's left and right children.
        this.rightNode = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    /*
     * Used for inserting new data into the BST. I believe that new nodes are inserted in order.
     */
    insertData(data) {
        const newNode = new NodeRepresentation(data); // Represents new node to insert into the tree.

        if (this.rootNode === null) {
            this.rootNode = newNode; // If the whole tree is empty, the new node will be inserted as the root node.       
        } else {
            let currentlySelectedNode = this.rootNode; // currentlySelectedNode is the current node that is being examined and may be the target index of insertion.
            let parentNode; // Declaring parentNode here so that child nodes can be created.

            while (true) {
                parentNode = currentlySelectedNode; // The new node to be created would be inserted as a child of the current node.  
                if (data < currentlySelectedNode.data) { // Begin traversing the left sub-children if the current node's value is greater than the new data to be inserted.
                    currentlySelectedNode = currentlySelectedNode.leftNode; // Let the new node in question be the left child.
                    if (currentlySelectedNode === null) { // If the left child doesn't exist, this is where the new data will be inserted.
                        parentNode.leftNode = newNode; // Create a reference in the first node in question during the current iteration that points to our new node we wished to create.
                        break;
                    }
                } else { // This is the same process as above with the exception of using right sub-children instead.               
                    currentlySelectedNode = currentlySelectedNode.rightNode;
                    if (currentlySelectedNode === null) {
                        parentNode.rightNode = newNode;
                        break;
                    }
                }
            }
        }
    }
}

// Should totally modularize this project!

// From here, I will devise my own value retrieving and other methods for the binary search tree, now that I have a better view of the tree.

/**
 * Inverts a mutable binary search tree.
 * @param {BinarySearchTree} tree The binary search tree to invert.
 */
function invert(tree) {
    // First, retrieve the root node.
    let currentNode = tree.rootNode;

    // Create an array that will store all nodes.
    let allNodes = [];

    // Store all nodes into the array.
    allNodes.push(currentNode);
    let parentNode = null;
    let traversingLeft = true;
    while (currentNode.leftNode || currentNode.rightNode) {
        if (traversingLeft && currentNode.leftNode) {
            allNodes.push(currentNode.leftNode);
            parentNode = currentNode;
            currentNode = currentNode.leftNode;
            continue;
        } else if (currentNode.rightNode) {
            allNodes.push(currentNode.rightNode);
            parentNode = currentNode;
            traversingLeft = true;
            currentNode = currentNode.rightNode;
        } else {
            traversingLeft = false;
            currentNode = parentNode;
        }
    }

    // Traverse leftmost, all the way down to the leftmost sub-child.
    while (currentNode.leftNode !== null && currentNode.leftNode < currentNode.rightNode) {
        // The algorithm makes the assumption that the binary tree is ordered in an ascending fashion.

        // Swap the left and right child nodes, assuming that the left one is the smaller value.
        // What happens below is that the right child's value is now the first element in the anonymous array, which is
        // the left child's value. Meanwhile, the left child's value is now, simutaneously, the right child's value.
        // By creating an anonymous array, saved values are possible, and therefore an exchanging of values is possible.
        currentNode.rightNode = [currentNode.leftNode, currentNode.leftNode = currentNode.rightNode][0];
    }
}

// Test to see a binary search tree creation:

let tree = new BinarySearchTree();

// Randomly insert 100 new integers.
for (let i = 0; i < 100; i++) {
    // Using a common pattern/implementation to generate random integers in Javascript.
    minimumInteger = Math.ceil(0);
    maximumInteger = Math.floor(100);
    tree.insertData(Math.floor(Math.random() * (maximumInteger - minimumInteger)) + minimumInteger);
}