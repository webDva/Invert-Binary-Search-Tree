# Invert-Binary-Search-Tree
An exercise in inverting binary search trees

# Implementing a binary search tree

I'm not familiar with binary search trees as I recently started learning about them. [I used this Ecmascript 6 implmentation](https://codepen.io/david_i_smith/pen/egbJjQ) for creating the trees that will be used.

New entries are inserted, I believe, in order, with the left-most sub-trees having the lowest values. Also, ~~I think that~~ duplicates can occur (since no checking is done when inserting) and are added as ~~left~~ right (after having seen the results using a tree created for testing) sub-children.

To learn more, I plan to only use the source code from the above link for tree creation and insertion. Retrieving values and the actual inversion will be left as exercises for me to do.

# The inversion algorithm

Before the algorithm can operate on the idea of making `for every a < b, make a > b`, it first searches through the tree for all nodes so that it can store them into an array.

# The function itself

The binary search tree to operate on must be mutable as the function will alter its data.
