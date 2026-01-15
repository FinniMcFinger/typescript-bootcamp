class Book {
    // private title: string;
    // subtitle: string;
    // publishDate: Date;

    // Typescript allows shortcut member declarations in consturctor
    constructor(
        private _title: string,
        public subtitle: string,
        public readonly publishDate = new Date()
    ) {
        this._title = _title;
        this.subtitle = subtitle;
        this.publishDate = publishDate;
    }

    // private members are mutable from inside the class only
    set title(newTitle:string) {
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    ageInDays() {  
        return this.ageInSeconds() / 60 / 60 / 24
    }

    ageInSeconds() {
        const ageMs = Date.now() - this.publishDate.getTime();

        return ageMs / 1000;
    }
}

const book1 = new Book(
    "Babby's First Book",
    "A book your kid won't be able to read",
    new Date(2026,0,1)
);

const book2 = new Book(
    "Fresh Off the Press",
    "The ink is still wet"
);

let book1AgeDays = Math.round(book1.ageInDays() * 10) / 10;
let book2AgeSeconds = book2.ageInSeconds();

console.log(`book 1 age in days: ${book1AgeDays}`);
console.log(`book 2 age in seconds: ${book2AgeSeconds}`);

// using getter and setter to access private member
book1.title = "Some New Title";
console.log(book1.title);