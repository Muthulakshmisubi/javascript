var findTotal;
var displayMenu;
var number1;
var number2;
var result;

number1 = 10;
number2 = 20;

findTotal = function () {
    result = number1 + number2;
};

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};

// Run the findTotal function
findTotal();

// Display the result on the console
console.log("Result = " + result);

// Run the displayMenu function
displayMenu();
