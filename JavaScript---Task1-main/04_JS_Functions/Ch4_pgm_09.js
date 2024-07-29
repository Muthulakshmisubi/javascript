var showMovieInfo;
var movie;

// Define the showMovieInfo function
showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

// 1) Add a call to showMovieInfo and run the program
showMovieInfo(); // This will throw an error because movie is not defined

// 2) Declare a movie variable but don't assign it a value
var movie; // Now movie is declared but not defined
showMovieInfo(); // This will throw an error because movie is undefined

// 3) Create an empty object and assign it to the movie variable
movie = {}; // movie is now an empty object
showMovieInfo(); // This will run but print "undefined" for the properties

// 4) Add title, actors and directors properties to the movie object
movie.title = "Inception";
movie.actors = ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"];
movie.directors = ["Christopher Nolan"];

showMovieInfo(); // This will now print the correct movie information

/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */
