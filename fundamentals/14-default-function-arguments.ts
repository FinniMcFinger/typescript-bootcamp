// standard argument definitions
function printCourse(title:string, subtitle:string, lessons:number) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons: ${lessons}`);
}

printCourse(
    "TypeScript Basics", 
    "Getting Started with TypeScript", 
    10);

// arguments with defaults
function printCourseWithDefaults(title:string, subtitle:string, lessons = 0) {
    printCourse(title, subtitle, lessons);
}

// note only 2 arguments passed
printCourseWithDefaults(
    "TypeScript Basics", 
    "Getting Started with TypeScript"
);
