// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
// charcode of A is 65

/**
 * @param {string} s
 * @return {number}
*/

var titleToNumber = function(s) {
  var output = 0;
  counter = 0;
  for ( var i = s.length-1; i >= 0; i-- ) {
    // console.log(s[i], s.charCodeAt(i), s.charCodeAt(i)-64+(i*26));
    // output += (s.charCodeAt(i) - 64) + (i*25)*(s.charCodeAt(i) - 64);
    output += Math.pow(26, counter)*(s.charCodeAt(i) - 64);
    counter++;
  }
  return output;
};

console.log(titleToNumber("BBBBB"));