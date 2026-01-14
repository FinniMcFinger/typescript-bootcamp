interface Course {
    title:string,
    lessons:number
}

const course1:Course = {
    title: "Babby's First Course",
    lessons: 3
};

const course2:Course = {
    title: "Adult Course",
    lessons: 365
};

// `...courses` operates like Java varargs
function printCourses(message:string, ...courses:Course[]) {
    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    }
}

printCourses("Welcome to the school!", course1, course2);