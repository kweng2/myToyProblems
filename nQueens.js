/**
 * @param {number} n
 * @return {number}
 */

// Starting at the bottom row, try to place a queen every row
// Keep track of where queens are available to be placed at every row via 3 arrays:
// col, miD, maD
// At the next row, shift the miD to the left and shift the maD to the right
// For all places where a queen can be placed at this row, place a queen here and attempt the next row

var totalNQueens = function(n) {
  var keepGoing = function (col, miD, maD, row) {
    // If we've gone past the last row, clearly a viable path
    if (row >= n) {
      return 1;
    } else {
      var open = col | miD | maD;
      var out = 0;
      for (var i=0; i<open.length; i++) {
        if (open[i] === 0) {
          out += keepGoing((col & []), ((miD & []) << 1), ((maD & []) >> 1));
        }
      }
      return out;
    }
  };
  return keepGoing(0, 0, 0, 0);
};