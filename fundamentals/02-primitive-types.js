// number
var lessonCount = 10;
var lessonCountExplicit = 10;
var total = lessonCount + 10;
console.log("total: " + total);
// string
var title = "Finni's Bootcamp";
var titleExplicit = "Finni's Bootcamp";
var subtitle = "Typescript Ultimate Bootcamp Course On Udemy";
console.log(title + ": " + subtitle);
// boolean
var published = false;
var publishedExplicit = false;
if (published) {
    console.log("course is published");
}
else {
    console.log("course is not published");
}
// template string
var fullTitle = "Full Title - ".concat(title, ": ").concat(subtitle);
console.log(fullTitle);
printCourse(title, subtitle, lessonCount);
function printCourse(title, subtitle, lessonCount) {
    var fullTitle = "".concat(title, ": ").concat(subtitle);
    console.log("".concat(fullTitle, " - ").concat(lessonCount, " ").concat(pluralize(lessonCount, "lesson")));
}
function pluralize(factor, base) {
    if (factor === 1) {
        return base;
    }
    else {
        return "".concat(base, "s");
    }
}
