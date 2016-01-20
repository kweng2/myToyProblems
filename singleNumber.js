// Given an array of integers, every element appears twice except for one. Find that single one.
// Linear time complexity

// Bonus: constant space

var singleNumber = function (nums) {
  var store = {};
  var output = [];
  for (var i=0; i < nums.length; i++) {
    if(store[nums[i]]) {
      store[nums[i]]++;
    } else {
      store[nums[i]] = 1;
    }
  }
  for (var key in store) {
    if(store[key] === 1) {
      output.push(Number(key));
    }
  }
  return output;
};