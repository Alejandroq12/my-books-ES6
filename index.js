// eslint-disable-next-line max-classes-per-file
import BookList from './modules/bookList.js';
import BooksListUI from './modules/booksListUI.js';





document.addEventListener('DOMContentLoaded', () => {
  const bookList = new BookList();
  const booksListUI = new BooksListUI(bookList);
  setupFormHandler(bookList, booksListUI);
  booksListUI.render();
});