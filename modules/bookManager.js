export default class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('book')) || [];
  }

  addBook(book) {
    this.books = [book, ...this.books];
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  getBooks() {
    return this.books;
  }
}
