// Using a variable as an index

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// 1) Change the value of the dayInWeek variable
//    to display a different day.
var dayInWeek = 2;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );

// 2) Write a function that accepts a number for the
//    day of the week to be displayed and returns
//    the day as a string. Assign the function to
//    a getDay variable.
var getDay = function(day) {
  return days[day - 1];
};

// 3) Call your function, passing it 4 as the day
//    of the week, and log the value it returns.
console.log( getDay(4) );