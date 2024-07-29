// Getting a string for a player’s information

var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getBorder;

getPlayerName = function (playerName) {
    return playerName;
};

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

getBorder = function () {
    return "********************";
};

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));
console.log(getPlayerInfo("Dax", "The Forest of Wonder", 75));

// Calling getPlayerInfo at the console prompt
// getPlayerInfo("Jax", "The Dark Castle", 100)

// What happens if you call getPlayerInfo without any arguments?
// getPlayerInfo() // This will result in an error, as the function expects three arguments