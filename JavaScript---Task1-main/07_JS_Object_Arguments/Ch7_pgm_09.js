// Finding a character with indexOf

var message = "We choose to go to the Moon!";

// 1) Use indexOf to find the index of where the word 'go' starts in the message string.
var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index " + goIndex);

// 2) Use indexOf and substr to display the word 'choose' from the message string.
var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6)); // Output: choose

// 3) Use lastIndexOf to find the index of the 'oo' in the word 'Moon' of the message string.
var moonIndex = message.indexOf("Moon");
var ooIndex = message.lastIndexOf("oo", moonIndex + 4);
console.log("The 'oo' in 'Moon' is at index " + ooIndex);