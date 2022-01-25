class Book {
  constructor(
    isbn,
    name,
    author,
    publishedDate,
  ) {
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.publishedDate = publishedDate;
  }
  bookAge() {
    let now = new Date();
    let published = new Date(this.publishedDate);
    let elapsed = now - published;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Book;