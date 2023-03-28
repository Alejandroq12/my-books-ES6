class BooksListUI {
  constructor(bookList) {
    this.bookList = bookList;
    this.bookTemplate = document.getElementById('bookInfoTemplate');
    this.booksContainer = document.querySelector('.booksContainer');
  }

    render = () => {
      this.booksContainer.innerHTML = '';
      this.bookList.renderBooks((book, removeBookFn) => {
        const bookInstance = this.bookTemplate.content.cloneNode(true);
        bookInstance.querySelector('h4').textContent = book.title;
        bookInstance.querySelector('p').textContent = book.author;
        bookInstance.querySelector('.removeButton').addEventListener('click', () => {
          removeBookFn();
          this.render();
        });
        this.booksContainer.appendChild(bookInstance);
      });
    };
}

export default BooksListUI;
