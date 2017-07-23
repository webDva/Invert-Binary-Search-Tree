# Invert-Binary-Search-Tree
An exercise in inverting binary search trees

# Implementing a Binary Search Tree

I'm not familiar with binary search trees as I recently started learning about them. [I used this Ecmascript 6 implmentation](https://codepen.io/david_i_smith/pen/egbJjQ) for creating the trees that will be used.

New entries are inserted, I believe, in order, with the left-most sub-trees having the lowest values. Also, I think that duplicates can occur (since no checking is done when inserting) and are added as left sub-children.

To learn more, I plan to only use the source code from the above link for tree creation and insertion. Retrieving values and the actual inversion will be left as exercises for me to do.

# The Process

First step is to create the tree data structure.

Then, we'll find out how to invert it so that for every a < b the new tree will have a > b.
