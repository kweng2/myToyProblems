// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // first check if s and t are of the same length
  if (s.length !== t.length) {
    return false;
  }
  var sChar = {};
  // store each character of s into an object store
  for ( var i = 0; i < s.length; i++ ) {
    sChar[s[i]] = sChar[s[i]] ? sChar[s[i]]+1 : 1;
  }
  for ( var j = 0; j < t.length; j++ ) {
    if (sChar[t[j]]) {
      sChar[t[j]]--;
    } else {
      return false;
    }
  }
  for (var k in sChar) {
    if (sChar[k] !== 0) {
      return false;
    }
  }
  return true;
};

var s = "anagram";
var t = "nagaram";

console.log(isAnagram(s,t));