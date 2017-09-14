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
        this.numberOfNodes = 0;
    }

    /*
     * Used for inserting new data into the BST. I believe that new nodes are inserted in order.
     */
    insertData(data) {
        // Increment the number of nodes this tree has.
        this.numberOfNodes++;
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
    // Create an array that will store all nodes.
    let allNodes = [];

    // Store all nodes into the array.
    allNodes.push(tree.rootNode);
    let currentNode = tree.rootNode;
    let parentNode = null;
    let traversingLeft = true;
    let numberOfNodesTraversed = 0;
    while (numberOfNodesTraversed !== tree.numberOfNodes) {
        if (traversingLeft && currentNode.leftNode) {
            allNodes.push(currentNode.leftNode);
            numberOfNodesTraversed++;
            parentNode = currentNode;
            currentNode = currentNode.leftNode;
        } else if (currentNode.rightNode) {
            allNodes.push(currentNode.rightNode);
            numberOfNodesTraversed++;
            traversingLeft = true;
            parentNode = currentNode;
            currentNode = currentNode.rightNode;
        } else {
            traversingLeft = false;
            currentNode = parentNode;
        }
    }

    // Using the array of all nodes, swap each node's child nodes.
    for (let i = 0; i < allNodes.length; i++) {
        if (allNodes[i].leftNode && allNodes[i].rightNode && allNodes[i].leftNode.data < allNodes[i].rightNode.data) {
            allNodes[i].rightNode = [allNodes[i].leftNode, allNodes[i].leftNode = allNodes[i].rightNode][0];
        } else if (allNodes[i].leftNode && allNodes[i].leftNode.data < allNodes[i].data) {
            allNodes[i].rightNode = [allNodes[i].leftNode, allNodes[i].leftNode = allNodes[i].rightNode][0];
        } else if (allNodes[i].rightNode && allNodes[i].data < allNodes[i].rightNode.data) {
            allNodes[i].rightNode = [allNodes[i].leftNode, allNodes[i].leftNode = allNodes[i].rightNode][0];
        }
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

// Test to see if inversion algorithm works.
invert(tree);