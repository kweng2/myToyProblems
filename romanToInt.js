// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1,000

// Examples:
// LXXVII  =>  77
// XLIII   =>  43
// MDCCC   =>  1800
// MDCCCXLIII => 1843
// MCMXCVI => 1000 - 100 + 1000 - 10 + 100 + 5 + 1 = > 1996
//               900     +     990   + 106
//                      1006 + 990

var romanToInt = function(s) {
  // May need to look forward to check for the case of IV => 4, XL => 40, CD => 400 
  // Definitely loop through every single char of the string once
  var sum = 0;
  var skip = false;
  for ( var i = 0; i < s.length; i ++ ) {
    if (skip) {
      skip = false;
    } else if (s[i] === 'I') {
      if (s[i+1] && s[i+1] === 'V') {
        skip = true;
        sum += 4;
      } else if (s[i+1] && s[i+1] === 'X') {
        skip = true;
        sum += 9;
      } else {
        sum += 1;
      }
    } else if (s[i] === 'X') {
      if (s[i+1] && s[i+1] === 'L') {
        skip = true;
        sum += 40;
      } else if (s[i+1] && s[i+1] === 'C') {
        skip = true;
        sum += 90;
      } else {
        sum += 10;
      }
    } else if (s[i] === 'C') {
      if (s[i+1] && s[i+1] === 'D') {
        skip = true;
        sum += 400;
      } else if (s[i+1] && s[i+1] === 'M') {
        skip = true;
        sum += 900;
      } else {
        sum += 100;
      }
    } else if (s[i] === 'V') {
      sum += 5;
    } else if (s[i] === 'L') {
      sum += 50;
    } else if (s[i] === 'D') {
      sum += 500;
    } else if (s[i] === 'M') {
      sum += 1000;
    }
  }
  return sum;
};

console.log(romanToInt('LXXVII'));
console.log(romanToInt('XLIII'));
console.log(romanToInt('MDCCC'));
console.log(romanToInt('MDCCCXLIII'));
console.log(romanToInt('MCMXCVI'));



// LXXVII  =>  77
// XLIII   =>  43
// MDCCC   =>  1800
// MDCCCXLIII => 1843


