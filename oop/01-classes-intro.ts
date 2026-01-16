import {HasTitle} from "./02-interfaces";

abstract class Book implements HasTitle {
    private static TOTAL_BOOKS = 0;

    // private title: string;
    // subtitle: string;
    // publishDate: Date;

    // Typescript allows shortcut member declarations in constructor
    protected constructor(
        public id: string,
        protected _title: string,
        public subtitle: string,
        public price: number,
        public readonly publishDate = new Date()
    ) {
        this.id = id;
        this.validatePrice(price);
        this._title = _title;
        this.subtitle = subtitle;
        this.price = price;
        this.publishDate = publishDate;

        Book.TOTAL_BOOKS++;
    }

    protected abstract validatePrice(price:number);

    static totalBooks() {
        return Book.TOTAL_BOOKS;
    }

    printId() {
        return this.id;
    }

    // private members are mutable from inside the class only
    set title(newTitle:string) {
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    get ageInDays() {
        return this.ageInSeconds / 60 / 60 / 24
    }

    get ageInSeconds() {
        const ageMs = Date.now() - this.publishDate.getTime();

        return ageMs / 1000;
    }
}

class LibraryBook extends Book {
    constructor(
        id:string,
        title: string,
        subtitle: string,
        publishDate = new Date()
    ) {
        super(id, title, subtitle, 0, publishDate);
    }

    protected validatePrice(price:number) {
        console.log("LibraryBook validate being called");
    }
}

class ConsumerBook extends Book {
    constructor(
        id:string,
        title: string,
        subtitle: string,
        price: number,
        publishDate = new Date()
    ) {
        super(id, title, subtitle, price, publishDate);
    }

    protected validatePrice(price:number) {
        console.log("ConsumerBook validate being called");

        if (price <= 0) {
            throw "Price must be greater than 0";
        }
    }
}

const book1 = new ConsumerBook(
    "123-abc",
    "Babby's First Book",
    "A book your kid won't be able to read",
    7.99,
    new Date(2026,0,1)
);

const book2 = new ConsumerBook(
    "abc123",
    "Fresh Off the Press",
    "The ink is still wet",
    2.99
);

let book1AgeDays = Math.round(book1.ageInDays * 10) / 10;
console.log(`book 1 age in days: ${book1AgeDays}`);
console.log(`book 2 age in seconds: ${book2.ageInSeconds}`);

// using getter and setter to access private member
book1.title = "Some New Title";
console.log(book1.title);

// accessing statics
console.log(Book.totalBooks());

// instantiating child class
let libraryBook = new LibraryBook(
    "lib1-bk3",
    "Library Book",
    "A book for free from a government building"
)
console.log(libraryBook.title);