import Book from './books.js';
import { isValidInput } from './utils.js';

const setupFormHandler = (bookList, booksListUI) => {
  document.getElementById('addBookButton').addEventListener('click', (event) => {
    event.preventDefault();

    const bookTitleInput = document.getElementById('bookTitle');
    const authorNameInput = document.getElementById('bookAuthor');
    const bookTitle = bookTitleInput.value;
    const authorName = authorNameInput.value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    errorMessage.textContent = '';
    successMessage.textContent = '';

    if (!isValidInput(bookTitle) || !isValidInput(authorName)) {
      errorMessage.textContent = 'Please enter a valid title and author name (letters and numbers only).';
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 2000);
      return;
    }

    const newBook = new Book(bookTitle, authorName);
    bookList.addBook(newBook);
    booksListUI.render();
    bookTitleInput.value = '';
    authorNameInput.value = '';

    successMessage.textContent = 'Book successfully created.';
    setTimeout(() => {
      successMessage.textContent = '';
    }, 2000);
  });
};

export default setupFormHandler;
