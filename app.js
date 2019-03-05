"use strict";

var Movie = require("./movies");

console.log("\nCreating Hangover...");
var hangover = new Movie("Hangover", Movie.genres.COMEDY, 2009);
console.log(hangover);
console.log("\nChanging Hangover to Hangover II...");
hangover.title = "Hangover II";
hangover.year = 2011;
console.log(hangover);
console.log("\nChanging Hangover II to Hangover III (fails due to invalid values)...");
hangover.title = 3;
hangover.genre = "mystery";
hangover.year = 1700;
console.log(hangover);
console.log("\nNumber of Movies: ".concat(Movie.counter));