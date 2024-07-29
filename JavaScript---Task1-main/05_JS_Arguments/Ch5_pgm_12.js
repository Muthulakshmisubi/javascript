// Displaying a player's location via object properties

var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);



/* Further Adventures
 *
 * 1) In the console.log parentheses, change
 *    playerName to playerName.substring(0, 1)
 *    Run the program. What do you think
 *    the substring function does?
 */

// The substring function extracts a part of a string. In this case, it extracts the first character of the string playerName. 
// The output will be:
// K is in The Dungeon of Doom
// D is in The Old Library



/* 2) Change the arguments to the substring
 *    function to (0, 2), then (0, 3) and so on.
 */

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 2) + " is in " + playerPlace);
};

// The output will be:
// Ka is in The Dungeon of Doom
// Da is in The Old Library

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 3) + " is in " + playerPlace);
};

// The output will be:
// Kan is in The Dungeon of Doom
// Dax is in The Old Library



/* 3) Change the arguments to
 *    (1, 2), then (1, 3) and so on.
 */

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(1, 2) + " is in " + playerPlace);
};

// The output will be:
// a is in The Dungeon of Doom
// a is in The Old Library

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(1, 3) + " is in " + playerPlace);
};

// The output will be:
// an is in The Dungeon of Doom
// ax is in The Old Library



/* 4) What role do you think the two arguments
 *    to the substring function have?
 */

// The two arguments to the substring function specify the start and end indices of the substring to be extracted. 
// The first argument is the start index (inclusive), and the second argument is the end index (exclusive). 
// For example, substring(0, 2) extracts the characters from index 0 to 1 (because the end index is exclusive).