// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

 // Time complexity: none
 // Space complexity: none
var removeElements = function(head, val) {
  // edge cases here:
  // in case passing in nothing
  if (!head) {
    console.log('got here');
    return null;
  }
  // in case there is only 1 element
  if (!head.next) {
    console.log('got here as well');
    if (val === head.val) {
      return null;
    } else {
      return head;
    }
  }
  // iterate through each element of the linked list and remove if that node's value is matching val
  var keepGoing = function (node, match) {
    if (!node) {
      return;
    }
    if (node.val === match) {
      // assuming this node is not the tail
      if (node.next) {
        // find continuous blocks of the same number
        var sameThing = false;
        if (node.val === node.next.val) {
          sameThing = true;
        }
        while (sameThing) {
          if (node.next && node.val === node.next.val) {
            node.val = node.next.val;
            node.next = node.next.next;
          } else if (!node.next && node.val === match) {
            node.val = null;
            node.next = null;
            return;
          } else {
            sameThing = false;
          }
        }
        if (node.next) {
          node.val = node.next.val;
          node.next = node.next.next;
          keepGoing(node.next, match);
        } else {
          return;
        }
      // otherwise, this is the tail
      } else {
        node.next = null;
        node.val = null;
        return;
      }
    // otherwise, keep looking downward
    } else {
      if (node.next) {
        keepGoing(node.next, match);
      }
    }
  };
  // return keepGoing(head, val) ? head : null;
  keepGoing(head, val);
  if (head.val === null && head.next === null) {
    return null;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(6);
var d = new ListNode(3);
var e = new ListNode(4);
var f = new ListNode(5);
var g = new ListNode(6);
var h = new ListNode(6);
var i = new ListNode(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;


// var newA = removeElements(a, 6);
// console.log(a.val, a.next.val, a.next.next.val, a.next.next.next.val, a.next.next.next.next.val);
var newG = removeElements(h, 7);
console.log(newG);