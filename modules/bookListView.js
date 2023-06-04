export function displayBooks(bookListElement, bookManager) {
  const books = bookManager.getBooks();

  bookListElement.innerHTML = '';
  const list = document.createElement('ul');
  list.classList.add('list-container');

  books.forEach((book, index) => {
    const listItem = document.createElement('li');

    const booksInfo = document.createElement('span');
    booksInfo.textContent = `${book.title} by ${book.author}`;
    listItem.classList.add(index % 2 === 0 ? 'even' : 'odd');
    listItem.appendChild(booksInfo);
    const removeButton = document.createElement('button');
    removeButton.id = `remove-button-${book.id}`;

    removeButton.textContent = 'remove';
    removeButton.setAttribute('data-index', index);

    listItem.appendChild(removeButton);
    list.appendChild(listItem);
  });

  bookListElement.appendChild(list);
  attachRemoveButtonListeners(bookListElement, bookManager);
}

export function attachRemoveButtonListeners(bookListElement, bookManager) {
  const removeButtons = bookListElement.querySelectorAll("button[id^='remove-button-']");
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const bookIndex = event.target.dataset.index;
      bookManager.removeBook(bookIndex);
      displayBooks(bookListElement, bookManager);
    });
  });
}
