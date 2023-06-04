import Book from './modules/book.js';
import BookManager from './modules/bookManager.js';
import displayDate from './modules/dateManager.js';
import { displayBooks } from './modules/bookListView.js';

class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.inputTitle = document.getElementById('title');
    this.inputAuthor = document.getElementById('author');
    this.inputButton = document.getElementById('add-button');
    this.listButton = document.getElementById('contact-section');
    this.newButton = document.getElementById('form-section');
    this.books = [];
    this.bookManager = new BookManager();
    this.inputButton.addEventListener('click', (event) => this.addBooks(event));
    // Use the method through the instance itself
    this.displayBooks();

    this.listLink = document.getElementById('list');
    this.addLink = document.getElementById('new');
    this.contactLink = document.getElementById('contact');

    this.listLink.addEventListener('click', () => this.showSection('div-list'));
    this.addLink.addEventListener('click', () => this.showSection('form-section'));
    this.contactLink.addEventListener('click', () => this.showSection('contact-section'));

    // Use the method through the instance itself
    this.displayDate();
  }

  addBooks(event) {
    event.preventDefault();
    const title = this.inputTitle.value;
    const author = this.inputAuthor.value;
    if (title !== '' && author !== '') {
      const book = new Book(Date.now(), title, author);
      this.bookManager.addBook(book);
    }
    // Use the method through the instance itself
    this.displayBooks();
    this.inputAuthor.value = '';
    this.inputTitle.value = '';
  }

  showSection = (sectionId) => {
    const sections = document.getElementsByClassName('list-section');

    for (let i = 0; i < sections.length; i += 1) {
      const content = sections[i];
      if (content.id === sectionId) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    }
  }

  displayDate = () => {
    displayDate('date');
  }

  displayBooks = () => {
    displayBooks(this.bookList, this.bookManager);
  }
}

const bookList = new BookList();
bookList.displayBooks();
