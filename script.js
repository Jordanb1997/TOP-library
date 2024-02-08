const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


//rewrite as arrow function
function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}