var _a;
var course = null;
// optional chaining
if (course === null || course === void 0 ? void 0 : course.title) {
    console.log("course title: ".concat(course.title));
}
// null coalescing
var title = (_a = course === null || course === void 0 ? void 0 : course.title) !== null && _a !== void 0 ? _a : "No title given";
// should print "No title given"
console.log(title);
