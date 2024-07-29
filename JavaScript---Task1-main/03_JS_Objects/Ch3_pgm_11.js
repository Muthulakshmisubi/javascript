// Using a property in a calculation

var player1;
var player2;

player1 = {
	  name: "Max",
	  score: 0
};

player2 = {
	  name: "Sam",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);
console.log(player2.name + " has scored " + player2.score);

player1.score = player1.score + 50;
player2.score = player2.score + 30;

console.log(player1.name + " has scored " + player1.score);
console.log(player2.name + " has scored " + player2.score);

// Increase player1's score by 10%
player1.score = player1.score * 1.1;

console.log(player1.name + " has scored " + player1.score);

// Find the sum of the players' scores
var totalScore = player1.score + player2.score;

console.log("The total score of " + player1.name + " and " + player2.name + " is " + totalScore);

/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *    (Done, increased player1's score by 10%)
 *
 * 2) Add a second player.
 *    (Done, added a second player object)
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *    (Done, found the sum of the players' scores and logged it to the console)
 *
 */