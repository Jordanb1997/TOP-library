const dialog = document.querySelector('.modal');
const openButton = document.querySelector('.add-book-dialog-button');
const submitButton = document.querySelector('.dialog-submit');
const closeButton = document.querySelector('.close-button');
const form = document.querySelector('.book-form');


const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}




openButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (e) => {
    addBookToLibrary(title.value, author.value, 45, true);
    console.log(e.title);


});

closeButton.addEventListener("click", () => {
    dialog.close();
});


//dummy data
addBookToLibrary("assassins apprentice", "robin hobb", 464);
addBookToLibrary("game of thrones", "grr martin", 816);