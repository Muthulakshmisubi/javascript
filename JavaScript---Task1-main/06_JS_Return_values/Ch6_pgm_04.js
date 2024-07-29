var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// 1) Find and display the sum of a different pair of numbers
var sum2 = add(75, 31);
console.log('The sum of 75 and 31 is ' + sum2);

// 2) Change the call to console.log to display a message
var sum = add(50, 23);
console.log('The sum of 50 and 23 is ' + sum);

// 3) Use the add function to add more than two numbers
var sum3 = add(10, add(20, 30));
console.log('The sum of 10, 20, and 30 is ' + sum3);

// 4) Create a function to return the sum of three numbers
var addThree = function (number1, number2, number3) {
    return number1 + number2 + number3;
};

var sum4 = addThree(10, 20, 30);
console.log('The sum of 10, 20, and 30 is ' + sum4);
