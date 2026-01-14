let course = null;

// optional chaining
if (course?.title) {
    console.log(`course title: ${course.title}`);
}

// null coalescing
let title = course?.title ?? "No title given";

// should print "No title given"
console.log(title);
