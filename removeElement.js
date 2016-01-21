var removeElements = function(head, val) {
  var keepGoing = function (node, match) {
    // in case node is empty to start
    if (!node) {
      return null;

    // if node has no child
    } else if (!node.next) {
      if (node.val === match) {
        return null;
      } else {
        return node;
      }

    // if node has a child, aka 2 levels deep or more
    } else {
      if (node.val === match) {
        // if this happens, try to see if the recursion call gives back anything
        var result = keepGoing(node.next, match);

        // if the result comes back not null
        if (result) {
          return result;

        // but if the result came back null, then return the result
        } else {
          return null;
        }

      // but if the current node does not match, simply look down
      } else {
        node.next = keepGoing(node.next, match);
        return node;
      }
    }
  };
  return keepGoing(head, val);
};

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var a = new ListNode(1);
// var b = new ListNode(1);
// var c = new ListNode(2);
// a.next = b;
// b.next = c;
// c.next = d;

// console.log(a);
// var newA = removeElements(a, 1);
// console.log(a.val, a.next.val, a.next.next.val, a.next.next.next.val, a.next.next.next.next.val);
// console.log(newA);
