interface Course {
    title:string;
    subtitle:string;
    stats: {
        lessonCount:number;
    }
};

let course: Course = {
    title: "Some Title",
    subtitle: "Some subtitle goes here",
    stats: {
        lessonCount: 12
    }
};

// spread operator creates a shallow copy of an object
const newCourse = {...course};

// updates to the original object will be reflected in copy
course.stats.lessonCount = 15;
console.log(newCourse);
