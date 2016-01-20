// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var isBalanced = function (root) {
  // traverse through the entire tree, so as to look at every node in the tree at least once
  if (root === null) {
    return true;
  } else if (!(root.left || root.right)) {
    return true;
  } else if ((root.left && !(root.left.left || root.left.right)) && (root.right && !(root.right.right || root.right.left))) {
    console.log('got here', root.val);
    return true;
  } else if (root.left && (root.left.left || root.left.right) && !root.right) {
    return false;
  } else if(root.right && (root.right.left || root.right.right) && !root.left) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};


function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);
var d = new TreeNode(3);
var e = new TreeNode(3);
var f = new TreeNode(4);
var g = new TreeNode(4);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;
d.right = g;

console.log(isBalanced(a));