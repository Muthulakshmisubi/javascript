// Displaying a player's name via an object property

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName.toUpperCase());
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

showPlayerName(player1.name);
showPlayerName(player2.name);



/* Further Adventures
 *
 * 1) In the showPlayerName function,
 *    change playerName to playerName.toUpperCase().
 *    Run the function.
 */

// Already done above



/* 2) Change the function to show the player's
 *    name in lower case.
 */

showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName.toLowerCase());
};

showPlayerName(player1.name);
showPlayerName(player2.name);