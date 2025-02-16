// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "The Avengers",
  actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
  directors: "Joss Whedon"
};

console.log("\nMovie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------\n");

console.log("\nMovie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------\n");

console.log("\nMovie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------\n");

console.log("\nMovie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------\n");

// Create objects to represent three calendar events
var event1;
var event2;
var event3;

event1 = {
  title: "Birthday Party",
  date: "2022-02-15",
  location: "Home"
};

event2 = {
  title: "Meeting",
  date: "2022-03-01",
  location: "Office"
};

event3 = {
  title: "Concert",
  date: "2022-04-10",
  location: "Stadium"
};

// Display info from the three events on the console
console.log("\nEvent information for " + event1.title);
console.log("------------------------------");
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log("------------------------------\n");

console.log("\nEvent information for " + event2.title);
console.log("------------------------------");
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log("------------------------------\n");

console.log("\nEvent information for " + event3.title);
console.log("------------------------------");
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log("------------------------------\n");