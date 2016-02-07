// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2.
// (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// a) Insert a character
// b) Delete a character
// c) Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Example word1: 'HelloWorld'
// Example word2: 'Hello World'

// Example word3: 'sdkjhf dsf dfg'
// Example word4: 'ixuycv'

// 1. Generate an array of common substrings between word1 and word2
// 2. To minimize the number of operations, keep the longest substring
// 3. Then operate on word 1:
// 4. If there are no common substrings, number of operations equals remaining characters of word2
  // 4. Between index 0 and the beginning of the substring of word1
    // Repeat step 1 with the first third of word1 and first third of word2
  // 5. Between the end of the substring and end index of word 1
    // Repeat step 1 with the last third of word1 and last third of word2


var minDistance = function(word1, word2) {
};