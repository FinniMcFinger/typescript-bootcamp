import {PAGE_SIZE, Course} from "12-module-exports"

/*
This would generate a compile error if `PAGE_SIZE` was not 
exported from 12-module-exports.ts.
*/
const pageSize = PAGE_SIZE;
const someCourse: Course = {
    title: "Some Title",
    subtitle: "Some subtitle"
};


// other modules can import MAX_PAGE_SIZE from this module
export {
    PAGE_SIZE as MAX_PAGE_SIZE
};

// importing via index.ts, relative path removed thanks to compiler config
import { SomeModel, feature1, feature2 } from "12-module-index";

let model: SomeModel = {
    id: 1,
    description: "Something"
};

feature1();
feature2();