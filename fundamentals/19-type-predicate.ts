interface Course {
    readonly title:string,
    subtitle: string,
    lessons?:number
}

const course: unknown = {
    title: "Title",
    subtitle: "Subtitle",
    lessons: 7
};

// type guard
if (isCourse(course)) {
    console.log(`${course.title}: ${course.subtitle}`)
}

// the `: value is Course` is known as a type predicate
function isCourse(value: unknown): value is Course {
    const course = value as Course;

    return course?.title != null && course?.subtitle != null;
}