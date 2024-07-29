// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
	pages: 310
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	pages: 399
};

book3 = {
	title: "The Lord of the Rings",
	author: "J. R. R. Tolkien",
	pages: 423
};

console.log(book1.title + " by " + book1.author + ", " + book1.pages + " pages");
console.log(book2.title + " by " + book2.author + ", " + book2.pages + " pages");
console.log(book3.title + " by " + book3.author + ", " + book3.pages + " pages");

/* Further Adventures
 *
 * 1) Add a third book.
 *    (Already done, added a third book object)
 *
 * 2) Log its details to the console.
 *    (Already done, logged the details of the third book to the console)
 *
 * 3) Add a third property.
 *    (Already done, added a 'pages' property to each book)
 *
 * 4) Update the messages logged to include the
 *    new property.
 *    (Already done, updated the messages to include the 'pages' property)
 *
 */