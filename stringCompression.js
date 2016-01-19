// Input strings take the form aabbccaaa
// Each character may repeat any number of times, or not at all
// A character may or may not reappear in the string
// There are no particular orders in which the string is given
// Assume all characters are lower case and there are no spaces
// Compress the string down to the format: a2b2c2a3
// One caveat is if the "compressed" string ends up being longer than the input string,
// In that case, return the input string

// There are no time complexity or space complexity constraints

var stringCompression = function (input) {
  // loop over each elemetn of the string, and add that to the output depending on the previous string's value

  // declare the output array of objects with the first element of the string
  var output = [[input[0], 1]];

  // Look at every element of the input string and compare it with the previous element in the string
  for (var i=1; i < input.length; i++) {
    // if it's the same character as the one prior, then increment the counter for that character
    if (input[i] === output[output.length-1][0]) {
      output[output.length-1][1]++;
    // but otherwise, create a new tuple storing the new character, with a count of 1
    } else {
      output.push([input[i], 1]);
    }
  }

  // construct the final output
  var intermediateOutput = output.map(function(tuple){
    return tuple[0] + '' + tuple[1];
  });

  var almostFinal = intermediateOutput.join('');
  if (almostFinal.length < input.length) {
    return almostFinal;
  } else {
    return input;
  }
};


// Another implementation that is very similar, but perhaps a little more elegant
var stringCompression2 = function (input) {
  var output = [input[0], 1];
  for (var i=1; i < input.length; i++) {
    if (input[i] == output[output.length-2]) {
      output[output.length-1]++;
    } else {
      output.push(input[i]);
      output.push(1);
    }
  }
  if(output.length < input.length) {
    return output.join('');
  } else {
    return input;
  }
};