import {Book} from "./02-partial";
import {freezeBook} from "./03-readonly";

export function freeze<T>(input: T): Readonly<T> {
    return Object.freeze(input);
}

const book: Book = {
    title: "A Book",
    subtitle: "Something interesting inside?",
    pageCount: 150
};

// two different interfaces exist now for the same function - the generic one works the same as the previous one
const frozenBook1 = freezeBook(book);
const frozenBook2 = freeze(book);

// these both will generate compile errors
// frozenBook1.title = "A Different Book";
// frozenBook2.title = "A Different Book";
