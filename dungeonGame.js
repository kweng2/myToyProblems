var calculateMinimumHP = function(dungeon) {
  var HP = 1;
  var sum = 0;
  var max = 0;
  var output = [];

  var recurse = function (row, col, path) {
    if (path.length >= dungeon.length*2 - 2) {
      output.push(path.concat(dungeon[row][col]));
    } else if (row < dungeon.length && col < dungeon[0].length) {  
      var p1 = Array.prototype.slice.call(path);
      var p2 = Array.prototype.slice.call(path);
      recurse(row+1, col, p1);
      recurse(row, col+1, p2);
    }
  };
  
  recurse(dungeon);

  // find the array within output with the largest contiguous sum
  
};