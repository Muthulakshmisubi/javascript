var sayHello;
var printHelloWorld;

sayHello = function () {
    console.log("Hello\nWorld!");
};

printHelloWorld = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

// Call the sayHello function three times
sayHello();
sayHello();
sayHello();

// Call the printHelloWorld function
printHelloWorld();
