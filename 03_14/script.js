/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
// console.log("Days since aquired:", everydayPack.backpackAge());

const firstBook = new Book(
  12345678,
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  "4 November 2001"
);

console.log("The firstBook object:", firstBook);
console.log("The book was published on:", firstBook.publishedDate);
console.log("The book is", firstBook.bookAge(), "days old");