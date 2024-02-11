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

    myLibrary.forEach((book) => console.log(book));
}




openButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-yn').value;

    addBookToLibrary(title, author, pages, read);
    clear();
    dialog.close();

});

function clear() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector('#read-yn').checked = false;
}

closeButton.addEventListener("click", () => {
    clear();
    dialog.close();
});


//dummy data
addBookToLibrary("assassins apprentice", "robin hobb", 464);
addBookToLibrary("game of thrones", "grr martin", 816);