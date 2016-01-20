// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 19 => 1^2 + 9^2 => 1 + 81 => 82
// 8^2 + 2^2 => 64 + 4 => 68
// 6^2 + 8^2 => 36 + 64 => 100
// 1^2 + 0^2 + 0^2 => 1

var happyNumber = function(num) {
  var store = {};
  var recurse = function (numArray) {
    if(numArray.length === 1 && numArray[0] == 1) {
      return true;
    } else if (store[numArray.join('')]) {
      return false;
    } else {
      store[numArray.join('')] = numArray.join('');
      return recurse(numArray.reduce(function(a, b){
        return a + b*b;
      }, 0).toString().split(''));
    }
  };
  return recurse(num.toString().split(''));
};