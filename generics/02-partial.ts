export interface Book {
    title: string;
    subtitle: string;
    pageCount: number;
}

// partials are wrappers on types that make all fields optional
export function updateBook(bookId: string, book: Partial<Book>) {

}

updateBook("1", {
    pageCount: 70
});