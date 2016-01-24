/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // edge case that neither exists
  if (!p && !q) {
    return true;

  // but if only one exists
  } else if ((!p && q) || (p && !q)) {
    return false;

  // exists, now check their values
  } else if (p.val !== q.val) {
    return false;

  // exists, matches values, check their children
  } else {

    var lResult = false;
    var rResult = false;

    // if both have left child, check left
    if (!!p.left && !!q.left) {
      lResult = isSameTree(p.left, q.left);
    } else if (!p.left && !q.left) {
      lResult = true;
    } else {
      lResult = false;
    }

    // if both have a right child, check right
    if (!!p.right && !!q.right) {
      rResult = isSameTree(p.right, q.right);
    } else if (!p.right && !q.right) {
      rResult = true;
    } else {
      rResult = false;
    }

    return lResult && rResult;
  }
};

//        10
//      /    \
//    5        15
//
//        10
//      /    \
//    5        null
//   / \
// null 15
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var a1 = new TreeNode(10);
var b1 = new TreeNode(5);
var c1 = new TreeNode(15);

var a2 = new TreeNode(10);
var b2 = new TreeNode(5);
var c2 = new TreeNode(15);

a1.left = b1;
a1.right = c1;

a2.left = b2;
b2.right = c2;

console.log(isSameTree(a1, a2));