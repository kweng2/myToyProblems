// integerPairs
// Design an algorithm to find all pairs of integers within an array which sum to a specified value. 
// Input: array
// Output: array of pairs
// Time complexity: O(n)
// Space complexity: no constraints
// Example:
// Input: [3, 4, 8, -1, 9, 6, 5, 12, 1], 7
// Output: [[3, 4], [8, -1], [1, 6]] (order of pairs does not matter)

var integerPair = function (inputArray, sum) {

  var arrayObj = {};
  var output = [];

  // loop over every elemetn of the inputArray and store each number in an object / hash table
  for ( var i=0; i < inputArray.length; i++ ) {
    // store that element of the array in object as the key, and the diff between it and sum as the value
    arrayObj[inputArray[i]] = sum - inputArray[i];
  }

  // once that's done, loop over every key in object store and see if its value exists in the object itself
  for ( var key in arrayObj ) {
    if (arrayObj[arrayObj[key]]) {
      output.push([Number(key), arrayObj[key]]);
      arrayObj[arrayObj[key]] = null;
    }
  }

  return output;
};

var inputArr = [3,4,8,-1,9,6,5,12,1];
var sum = 7;

console.log(integerPair(inputArr, sum));