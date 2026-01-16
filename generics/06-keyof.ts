import {Book} from "./02-partial";

type BookKeys = keyof Book;

// no type safety
function extractPropertyUnsafe(data, property) {
    return data[property];
}

// provides type safety
export function extractProperty<T, K extends keyof T>(data: T, property: K) {
    return data[property];
}

const book: Book = {
    title: "Some Book Title",
    subtitle: "Some Book Subtitle",
    pageCount: 120
};

// both of these calls are acceptable to the compiler, but the 2nd and 3rd causes a runtime error
let unsafeVal = extractPropertyUnsafe(book, "title");
unsafeVal = extractPropertyUnsafe("some random string", "title");
unsafeVal = extractPropertyUnsafe(book, "recipe");

// generics give type safety - the 2nd and 3rd declarations create compile errors
let safeVal = extractProperty(book, "title");
// safeVal = extractProperty(book, "recipe");
// safeVal = extractPropertyUnsafe({}, "title");
