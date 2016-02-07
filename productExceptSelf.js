/// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var output = [];
  var preProduct = [1];
  var postProduct = [];
  postProduct[nums.length-1] = 1;
  for ( var i = 1; i < nums.length; i++ ) {
    preProduct[i] = preProduct[i-1] * nums[i-1];
  }
  for ( var j = nums.length-2; j >= 0; j-- ) {
    // console.log(postProduct[j+1], nums[j+1]);
    postProduct[j] = postProduct[j+1] * nums[j+1];
  }
  // console.log(preProduct, postProduct);
  for ( var k = 0; k < nums.length; k++ ) {
    output[k] = preProduct[k] * postProduct[k];
  }
  return output;
};

var a = [1,2,3,4];
console.log(productExceptSelf(a));