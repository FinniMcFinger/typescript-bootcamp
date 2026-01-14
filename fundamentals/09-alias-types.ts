// alias type
type CourseStatus = "draft" | "published" | "unpublished" | "archived";

// allows reuse of type declaration
let courseStatus:CourseStatus = "draft";
let newStatus:CourseStatus = "unpublished";

type Course = {
    title:string,
    subtitle:string,
    lessonCount:number
};

let course:Course = {
    title: "Some Tile",
    subtitle: "Some fancy subtitle",
    lessonCount: 12
};
