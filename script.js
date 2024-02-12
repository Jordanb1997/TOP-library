const dialog = document.querySelector('.modal');
const openButton = document.querySelector('.add-book-dialog-button');
const submitButton = document.querySelector('.dialog-submit');
const closeButton = document.querySelector('.close-button');
const form = document.querySelector('.book-form');
const library = document.querySelector('.library');


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
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-yn').value;

    if (title === "" && author === "" && pages === "") {
        dialog.close();
    } else {
        addBookToLibrary(title, author, pages, read);
        clear();
        dialog.close();
    }
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

function displayBook(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-value", book.title)
    card.innerHTML = `

    <p>Name:${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</P>
    <p>Read: ${book.read}</p>
    <button class="status-af">change read</button>
    <button class="delete-card" >delete</button>`;
    library.appendChild(card);
}

//dummy data
addBookToLibrary("assassins apprentice", "robin hobb", 464, true);
addBookToLibrary("game of thrones", "grr martin", 816, true);
addBookToLibrary("the way of kings", "brandon sanderson", 1007, false);
addBookToLibrary("mist born", "brandon sanderson", 541, true);
addBookToLibrary("The three body problem", "Liu Cixin", 416, false);

myLibrary.forEach((book) => displayBook(book));

