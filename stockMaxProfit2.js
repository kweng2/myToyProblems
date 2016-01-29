// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var accums = [];
  for ( var i = 1; i < prices.length; i++ ) {
    var tail = accums.length - 1;
    var diff = prices[i] - prices[i-1];
    if ((accums[tail] < 0 && diff <= 0) || (accums[tail] > 0 && diff >= 0)) {
      accums[tail] += diff;
    } else {
      accums.push(diff);
    }
  }
  console.log(accums);

  // now, sum the 2 largest positive numbers in accums
  var originalAccums = Array.prototype.slice.apply(accums);

  var a = Math.max(...accums);
  var aIndex = accums.indexOf(a);

  accums[aIndex] = null;

  var b = Math.max(...accums);
  var bIndex = accums.indexOf(b);

  var firstIndex = Math.min(aIndex,bIndex);
  var secondIndex = firstIndex === aIndex ? bIndex : aIndex;
  // console.log('At ' + firstIndex + ' is ' + originalAccums[firstIndex]);
  // console.log('At ' + secondIndex + ' is ' + originalAccums[secondIndex]);

  var firstSum = originalAccums[firstIndex];
  for ( var j = 0; j < firstIndex; j ++ ) {
    var tempSum = originalAccums.slice(j,firstIndex+1).reduce(function(a, b){
      return a+b;
    });
    firstSum = tempSum > firstSum ? tempSum : firstSum;
  }

  var secondSum = originalAccums[secondIndex];
  var usedSecond = false;
  for (var k = secondIndex; k > firstIndex; k -- ) {
    var tempSum = originalAccums.slice(firstIndex,k).reduce(function(a, b){
      return a+b;
    });
    if (tempSum > secondSum)
  }


  for ( var k = firstIndex + 1; k < secondIndex; k ++ ) {
    var tempSum = originalAccums.slice(k,secondIndex+1).reduce(function(a, b){
      return a+b;
    });
    secondSum = tempSum > secondSum ? tempSum : secondSum;
  }

  var thirdSum = secondSum;
  for (var l = originalAccums.length; l > secondIndex; l -- ) {
    var tempSum = originalAccums.slice(secondIndex,l).reduce(function(a, b) {
      return a+b;
    });
    thirdSum = tempSum > thirdSum ? tempSum : thirdSum;
  }

  return (firstSum > 0 ? firstSum : 0) + (thirdSum > 0 ? thirdSum : 0);

  // return (a > 0 ? a : 0) + (b > 0 ? b : 0);
};

// var a = [1,2,3,4,5,4,6];
// var a = [1,2,4,2,5,7,2,4,9,0];
// var a = [0, 10, 8, 25, 19, 31, 25, 38];
var a = [2,6,8,7,8,7,9,4,1,2,4,5,8];

console.log(maxProfit(a));