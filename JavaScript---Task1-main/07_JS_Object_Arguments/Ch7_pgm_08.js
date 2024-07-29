// Finding substrings

var message = "We choose to go to the Moon!";

// 1) Use substr to log the following parts of the message string to the console:
console.log(message.substr(17, 5)); // Output: Moon!
console.log(message.substr(10, 9)); // Output: go to the
console.log(message.substr(0, 10)); // Output: We choose

// 2) Investigate what happens if you omit the second argument when calling substr.
console.log(message.substr(10)); // Output: go to the Moon!

// 3) What happens if you use negative numbers as arguments?
console.log(message.substr(-5)); // Output: Moon!
console.log(message.substr(10, -3)); // Output: (empty string)