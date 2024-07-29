// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[0] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");



/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 */

// The brackets have the effect of accessing the first character of the string playerName. 
// So, "Kandra" becomes "K" and "Dax" becomes "D". The output will be:
// K is in The Dungeon of Doom
// D is in The Old Library



/* 2) Change the number in the brackets to 1.
 */

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[1] + " is in " + playerPlace);
};

// The output will be:
// a is in The Dungeon of Doom
// a is in The Old Library



/* 3) What happens when you change the
 *    number to 3? Why?
 */

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

// The output will be:
// n is in The Dungeon of Doom
// x is in The Old Library

// This is because the brackets are accessing the character at the specified index in the string. 
// In the case of "Kandra", the characters are indexed as follows: K(0), a(1), n(2), d(3), r(4), a(5). 
// So, playerName[3] accesses the character "d". 
// Similarly, for "Dax", the characters are indexed as follows: D(0), a(1), x(2). 
// So, playerName[3] is undefined, because there is no character at index 3 in the string "Dax". 
// However, in JavaScript, when you try to access an undefined property, it returns "undefined" instead of throwing an error. 
// So, the output will be "undefined is in The Old Library".