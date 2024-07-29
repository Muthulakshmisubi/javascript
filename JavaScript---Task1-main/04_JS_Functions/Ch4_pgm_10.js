// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// 1) Without declaring a movie2 variable, assign movie2 to the movie variable instead of movie1
// movie = movie1;
movie = movie2; // This will throw an error because movie2 is not defined

// 2) Create an empty object and assign it to a movie2 variable
var movie2 = {};

movie = movie2; // This will print empty strings for title, actors, and directors

showMovieInfo();

// 3) Fill out movie2 with the properties needed by showMovieInfo
movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie = movie2;

showMovieInfo(); // This will print the information for movie2