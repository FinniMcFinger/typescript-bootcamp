function saveCourse(course, callback: Function) {
    console.log(`Saving course: ${course.title}`);
    setTimeout(() => {
        callback();
    }, 1000);
};

saveCourse({ title: "TypeScript Bootcamp" }, () => {
    console.log("Callback executed");
});

// verbosely defined lambdas with its own `this` context
const cb = function() {
    console.log("Callback from variable");
};
saveCourse({ title: "Typescript Bootcamp" }, cb);
saveCourse({ title: "Typescript Bootcamp" }, function() {
    console.log("Callback from inline function");
});