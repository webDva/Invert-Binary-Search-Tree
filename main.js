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
        this.root = null;
    }
    
    /*
     * Used for inserting new data into the BST. I believe that new nodes are inserted in order.
     */
    insertData(data) {  
        const newNode = new NodeRepresentation(data); // Represents new node to insert into the tree.
        
        if (this.root === null) {      
            this.root = newNode; // If the whole tree is empty, the new node will be inserted as the root node.       
        } else {
            let currentlySelectedNode = this.root; // currentlySelectedNode is the current node that is being examined and may be the target index of insertion.
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

function retrieveValue () { // Should I even do this or go straight to inverting? Maybe the latter.
    
}

