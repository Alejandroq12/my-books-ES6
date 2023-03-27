export const setupNavigation = () => {
    const navBooks = document.getElementById('navBooks');
    const navAddBook = document.getElementById('navAddBook');
    const navContact = document.getElementById('navContact');
  
    const booksSection = document.getElementById('booksSection');
    const addBookSection = document.getElementById('addBookSection');
    const contactSection = document.getElementById('contactSection');
  
    const showSection = (section) => {
      booksSection.classList.add('hidden');
      addBookSection.classList.add('hidden');
      contactSection.classList.add('hidden');
      section.classList.remove('hidden');
    };
  
    navBooks.addEventListener('click', () => {
      showSection(booksSection);
    });
  
    navAddBook.addEventListener('click', () => {
      showSection(addBookSection);
    });
  
    navContact.addEventListener('click', () => {
      showSection(contactSection);
    });
  };
  