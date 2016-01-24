// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // keep track of current sum
  var currentSum = nums[0];
  var bestSum = nums[0];

  for ( var i = 1; i < nums.length; i++ ) {
    // if the current sum goes negative, reset it to 0
    if (currentSum < 0) {
      currentSum = 0;
    }

    // accumulate the current number
    currentSum += nums[i];

    // if where we're at is better than a best, store this as the best
    if (currentSum > bestSum) {
      bestSum = currentSum;
    }

  }

  return bestSum;
};

var nums = [-2, 1];

console.log(maxSubArray(nums));