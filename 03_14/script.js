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
  "26 June"
);

const secondBook = new Book(
  12345678,
  "Harry Potter and the Chamber of Secrets",
  "J.K. Rowling",
  "2 July 1998"
);

const thirdBook = new Book(
  12345678,
  "Harry Potter and the Prisoner of Azkaban",
  "J.K. Rowling",
  "8 July 1999"
);

const fourthBook = new Book(
  12345678,
  "Harry Potter and the Goblet of Fire",
  "J.K. Rowling",
  "8 July 2000"
);

const fifthBook = new Book(
  12345678,
  "Harry Potter and the Order of the Phoenix",
  "J.K. Rowling",
  "27 June 2003"
);

console.log("The firstBook object:", firstBook);
console.log("The book was published on:", firstBook.publishedDate);
console.log("The book is", firstBook.bookAge(), "days old");

console.log("The secondBook object:", secondBook);
console.log("The book was published on:", secondBook.publishedDate);
console.log("The book is", secondBook.bookAge(), "days old");

console.log("The third Book object:", thirdBook);
console.log("The book was published on:", thirdBook.publishedDate);
console.log("The book is", thirdBook.bookAge(), "days old");

console.log("The fourth Book object:", fourthBook);
console.log("The book was published on:", fourthBook.publishedDate);
console.log("The book is", fourthBook.bookAge(), "days old");

console.log("The fifth Book object:", fifthBook);
console.log("The book was published on:", fifthBook.publishedDate);
console.log("The book is", fifthBook.bookAge(), "days old");