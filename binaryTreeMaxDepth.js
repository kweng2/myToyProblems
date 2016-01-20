// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    var leftResult = maxDepth(root.left);
    var rightResult = maxDepth(root.right);
    if (leftResult > rightResult) {
      return 1 + leftResult;
    } else {
      return 1 + rightResult;
    }
  }
};
