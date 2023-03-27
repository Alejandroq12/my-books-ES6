// eslint-disable-next-line max-classes-per-file
import BookList from './modules/bookList.js';


document.addEventListener('DOMContentLoaded', () => {
  const bookList = new BookList();
  const booksListUI = new BooksListUI(bookList);

});