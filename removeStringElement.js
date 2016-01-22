// Given an array and a value, remove all instances of that value in place and return the new length.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  var counter = 0;
  var l = nums.length;
  for (var i = 0; i < l; i++) {
    if (nums[counter] === val) {
      nums.splice(counter, 1);
    } else {
      counter++;
    }
  }
  return nums.length;
};

var nums = [1, 5, 6, 7, 1, 1, 1, 1];
var result = removeElement(nums, 1);
console.log(nums, result);
