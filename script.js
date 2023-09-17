// script.js

document.addEventListener("DOMContentLoaded", function () {
    const booksLink = document.querySelector('a[href="#books"]');
    if (booksLink) {
        booksLink.addEventListener("click", function (e) {
            e.preventDefault();
            const booksSection = document.getElementById("books");
            booksSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
