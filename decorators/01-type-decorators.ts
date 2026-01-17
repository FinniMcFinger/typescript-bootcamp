import {Log, LoggingLevel, Perf} from "./02-method-decorators";
import {SealClass} from "./03-class-decorators";
import {DatabaseId} from "./04-property-decorators";

@SealClass
class DataService {

    @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log("saving data to database . . .");
    }
}

const db = new DataService();
db.saveData({hello: "world"});

/*
Because of `@Seal()` on `DataService`, attempting to define a new property on the class will result in a `TypeError`
at runtime.
`TypeError: Cannot define property sayHello, object is not extensible`
 */
// Object.defineProperty(DataService, "sayHello", {
//     value: () => console.log("hello world")
// })

export class Book {
    @DatabaseId()
    id: string;
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    print(message: string) {
        console.log(`${this.title}(${this.id}): ${message}`);
    }
}

const book1 = new Book("Book 1");
console.log(`Book 1 id: `, book1.id);
const book2 = new Book("Book 2");
console.log(`Book 2 id: `, book2.id);
console.log(`Book 1`, book1);
console.log(`Book 2`, book2);