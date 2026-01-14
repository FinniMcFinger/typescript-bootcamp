enum CourseType {
    FREE,
    PREMIUM = 10,
    PRIVATE,
    HIDDEN = "HIDDEN"
};

const course = {
    title: "Some Title",
    type: CourseType.HIDDEN
};

console.log(course);