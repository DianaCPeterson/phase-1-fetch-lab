const fetchBooks = () => {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((booksArray) =>  renderBooks(booksArray))
  .catch(error => console.error(error)) 
}

function renderBooks(booksArray) {
  const main = document.querySelector('main');
  booksArray.forEach(bookObj => {
    const h2 = document.createElement('h2');
    h2.innerText = bookObj.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
