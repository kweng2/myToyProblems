// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var invertTree = function(root) {
  // in case root is empty
  if (!root) {
    return null;
  }
  // swap the left and right child
  var temp = root.left;
  root.left = root.right;
  root.right = temp;

  // repeat for left child
  if (root.left) {
    invertTree(root.left);
  }
  // repeat for right child
  if (root.right) {
    invertTree(root.right);
  }
  return root;
};

var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(7);
var d = new TreeNode(1);
var e = new TreeNode(3);
var f = new TreeNode(6);
var g = new TreeNode(9);
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;

console.log(invertTree(a));
