// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  // non-edge case: numbers on either side are larger than self, then buy at this point
  // non-edge case: number on either side are smaller than self, then sell at this point
  // Edge case at the beginning: next number is smaller than self, do not buy yet, aka do nothing
  // Edge case at the beginning: next number is larger than self, buy
  // Edge case at the end: previous number is smaller than self, sell
  // Edge case at the end: previous number is larger than self, do nothing

  // create flag to see if we've bought
  var inMarket = false;
  // last purchase price
  var bought = 0;
  // total profit so far
  var profit = 0;

  // iterate through the loop from 1 to n-1
  for (var i = 0; i < prices.length - 1; i++) {
    // Edge case for beginning
    if (i === 0 && prices[1] > prices[0]) {
      bought = prices[0];
      inMarket = true;

    // local minima, and not in market, buy
    } else if (prices[i+1] >= prices[i] && prices[i] <= prices[i-1] && !inMarket) {
      bought = prices[i];
      inMarket = true;

    // local maxima, and in market, sell
    } else if (prices[i+1] <= prices[i] && prices[i] >= prices[i-1] && inMarket) {
      profit += prices[i] - bought;
      inMarket = false;
    }
  }

  // at the end, if we're still in the market, sell
  if (inMarket) {
    profit += prices[i] - bought;
    inMarket = false;
  }

  return profit;
};

var prices = [2, 2, 5];
console.log(maxProfit(prices));