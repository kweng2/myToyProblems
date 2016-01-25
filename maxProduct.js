// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var max = nums[0];
  var current = 1;
  var alt = 1;
  if (nums[0] > 0) {
    current = nums[0];
    alt = nums[0];
  } else if (nums[0] < 0) {
    alt = nums[0];
  }

  for ( var i = 1; i < nums.length; i++ ) {
    if (nums[i] > 0) {
      current *= nums[i];
      alt *= nums[i];
      max = current > max ? current: max;
    } else if (nums[i] < 0) {
      current = 1;
      alt *= nums[i];
      if (alt > 0) {
        current = alt;
      }
      max = alt > max ? alt : max;
    } else {
      max = 0 > max ? 0 : max;
      alt = 1;
      current = 1;
    }
  }

  current = 1;
  alt = 1;
  if (nums[nums.length-1] > 0) {
    current = nums[nums.length-1];
    alt = nums[nums.length-1];
  } else if (nums[nums.length-1] < 0) {
    alt = nums[nums.length-1];
  }

  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > 0) {
      current *= nums[i];
      alt *= nums[i];
      max = current > max ? current: max;
    } else if (nums[i] < 0) {
      current = 1;
      alt *= nums[i];
      if (alt > 0) {
        current = alt;
      }
      max = alt > max ? alt : max;
    } else {
      max = 0 > max ? 0 : max;
      alt = 1;
      current = 1;
    }
  }

  return max;
};

// var numbers = [0, -1, 2, -3, 1];
// var numbers = [-2, -3, 7];
// var numbers = [7, -2, -4];
var numbers = [2,-5,-2,-4,3];

console.log(maxProduct(numbers));