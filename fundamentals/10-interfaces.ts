interface MyCourseType {
    readonly title:string,
    subtitle:string,
    lessonCount?:number
};

let courseA:MyCourseType = {
    title: "Some Tile",
    subtitle: "Some fancy subtitle",
    lessonCount: 12
};

// compile error trying to reassign readonly property
// courseA.title = "Different Title";

let courseB:MyCourseType = {
    title: "Some Other Tile",
    subtitle: "Some fancy subtitle"
};

// extending an interface
interface MyCourseType {
    maxEnrollment?:number
};

let courseC:MyCourseType = {
    title: "Some Third Title",
    subtitle: "Some fancy subtitle",
    maxEnrollment: 5
};