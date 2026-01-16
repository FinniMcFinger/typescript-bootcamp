import {Book} from "./02-partial";

export function freezeBook(book: Book): Readonly<Book> {
    return Object.freeze(book);
}

const book = freezeBook({
    title: "Babby's First Book",
    subtitle: "A book even your infant can understand",
    pageCount: 15
});

// this would generate a compile error
// book.title = "Babby's First Time-Traveling Book";
