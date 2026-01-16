export class BookService {
    private static INSTANCE: BookService;

    private constructor() {
        console.log("BookService initialized");
    }

    static instance() {
        if (!BookService.INSTANCE) {
            BookService.INSTANCE = new BookService();
        }

        return BookService.INSTANCE;
    }
}

// this will log to the console only 1 time
BookService.instance();
BookService.instance();
