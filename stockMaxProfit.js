// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // keep track of max sum and current sum
  var maxSum = 0;
  var currentSum = 0;

  // iterate through every stock price point, starting from 1 -> n-1
  for ( var i = 1; i < prices.length; i++ ) {
    // get the difference between current and last price point
    var diff = prices[i] - prices[i-1];
    // accumulate the price difference
    currentSum += diff;

    // console.log(currentSum, maxSum);

    // if price difference exceeds maxProfit, store that
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    // if at any point, currentSum goes under 0, reset currentSum to 0
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  // at the end of the for loop, return the maxSum
  return maxSum;
};

var prices = [-10, -9];
console.log(maxProfit(prices));