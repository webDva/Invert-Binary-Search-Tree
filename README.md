# Invert-Binary-Search-Tree
An exercise in inverting binary search trees

**Still in early development**

# Implementing a binary search tree

I'm not familiar with binary search trees as I recently started learning about them. [I used this Ecmascript 6 implmentation](https://codepen.io/david_i_smith/pen/egbJjQ) for creating the trees that will be used.

New entries are inserted, I believe, in order, with the left-most sub-trees having the lowest values. Also, ~~I think that~~ duplicates can occur (since no checking is done when inserting) and are added as ~~left~~ right (after having seen the results using a tree created for testing) sub-children.

To learn more, I plan to only use the source code from the above link for tree creation and insertion. Retrieving values and the actual inversion will be left as exercises for me to do.

# The inversion algorithm

<<<<<<< HEAD
Before the algorithm can operate on the idea of making `for every a < b, make a > b`, it first searches through the tree for all nodes so that it can store them into an array.
=======
> For every a < b, make a > b

The above statement was the basis for my initial idea, but I deviated a little from that.

~~First step, after having created a tree data structure, will be to traverse from the root node to the left-most sub-child, collecting parent nodes along the way down.~~

I initially was going to traverse downward, then upward, collecting nodes during the downward traversal. But I instead chose to simply swap left and right sub-child nodes.

The algorithm assumes that data values are in ascending order.
>>>>>>> ec34a8eedebb9d619d6f68b543cf3a9323b09cb2

# The function itself

The binary search tree to operate on must be mutable as the function will alter its data.
