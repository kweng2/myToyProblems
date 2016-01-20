// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

var addDigits = function (input) {
  var str = input.toString();
  console.log(str);
  if (str.length <= 1) {
    return input;
  } else {
    var temp = Array.prototype.reduce.call(str, function(accumulator, item){return parseInt(accumulator) + parseInt(item);});
    return addDigits(temp);
  }
};