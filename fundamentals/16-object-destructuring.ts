interface Course {
    title:string;
    subtitle:string;
    lessonCount:number;
};

let course: Course = {
    title: "Some Title",
    subtitle: "Some subtitle goes here",
    lessonCount: 12
};

printCourse(course);

function printCourse(course:Course) {
    // object destructuring
    const {title, subtitle, lessonCount} = course;

    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons: ${lessonCount}`);
}
