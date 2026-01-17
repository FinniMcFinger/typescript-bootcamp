import {Log, LoggingLevel} from "./02-method-decorators";

// @SealClass()
// @DatabaseService()
class DataService {

    // @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data: any) {
        console.log("saving data to database . . .");
    }
}

const db = new DataService();
db.saveData({hello: "world"});

export class Book {
    // @DatabaseId()
    id: string;
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    print(message: string) {
        console.log(`${this.title}(${this.id}): ${message}`);
    }
}