import BookList from './modules/bookList.js';
import BooksListUI from './modules/booksListUI.js';
import { displayLiveDate } from './modules/utils.js';
import setupNavigation from './modules/navigation.js';
import setupFormHandler from './modules/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookList = new BookList();
  const booksListUI = new BooksListUI(bookList);
  setupFormHandler(bookList, booksListUI);
  setupNavigation();
  booksListUI.render();
  displayLiveDate();
  setInterval(displayLiveDate, 30000);
});
