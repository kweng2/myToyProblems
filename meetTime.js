// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

// Assume no start time is < 0
// Assume earliest start time will always be 0

var meetTime = function (arr) {
  var rooms = 0;
  var end = 0;
  // find the latest end time of all meetings
  for ( var i = 0; i < arr.length; i ++ ) {
    if (arr[i][1] > end) {
      end = arr[i][1];
    }
  }

  // Loop through each time stamp
  for ( var t = 0; t <= end; t ++ ) {
    var max = 0;
    // Loop through each meeting
    for ( var i = 0; i < arr.length; i ++ ) {
      // See if this meeting's start time and end time spans the current time
      if (arr[i][0] <= t && t <= arr[i][1]) {
        // if so, add to max
        max++;
      }
    }
    if (max > rooms) {
      rooms = max;
    }
  }
  return rooms;
};

var meets = [[0, 30],[5, 10],[15, 20]];

console.log(meetTime(meets));