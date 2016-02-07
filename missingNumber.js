// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  for ( var i = 0; i < nums.length-1; i++ ) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return null;
};