// Displaying a player's health

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth;
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);

/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    Kandra: health 50.
 */

// Already done above



/* 2) Call the showPlayerHealth function
 *    using your own arguments.
 */

showPlayerHealth("Lila", 60);
showPlayerHealth("Jax", 30);



/* 3) Declare a variable called healthInfo
 *    inside the showPlayerHealth function.
 *
 *    var healthInfo;
 */

// Already done above



/* 4) Assign healthInfo the string that
 *    will be displayed.
 *
 *    healthInfo = playerName + ": health " + playerHealth;
 */

// Already done above



/* 5) Change the call to console.log so that
 *    it uses the healthInfo variable.
 */

// Already done above