// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

// 1) Run the program.
// (already done)

// 2) Call the getMessage function
console.log(getMessage());

// 3) Call the getHelloTo function with "Dax" as an argument
console.log(getHelloTo("Dax"));

// 4) Call the getHelloTo function with different arguments
console.log(getHelloTo("Alice"));
console.log(getHelloTo("Bob"));

// 5) Call the sum and totalCost functions with different arguments
console.log(sum(2, 3));
console.log(sum(10, 5));

console.log(totalCost(30, 40, 2));
console.log(totalCost(20, 30, 4));