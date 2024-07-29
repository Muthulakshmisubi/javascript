// Getting a string for a player’s name

var getPlayerName;

getPlayerName = function (playerName) {
    var prefixSuffix = "==== ";
    var border = "\n| \n| ";
    return border + "|" + prefixSuffix + playerName + " " + prefixSuffix + "\n| ";
};

console.log(getPlayerName("Kandra"));
console.log(getPlayerName("Jahver"));