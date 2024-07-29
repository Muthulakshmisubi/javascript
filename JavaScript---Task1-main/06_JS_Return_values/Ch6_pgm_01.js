// Returning a value from a function

var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage = function () {
    return "May the code be with you!";
};

response = getMessage();

console.log(response);