var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 10] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 11] = "PRIVATE";
    CourseType["HIDDEN"] = "HIDDEN";
})(CourseType || (CourseType = {}));
;
var course = {
    title: "Some Title",
    type: CourseType.HIDDEN
};
console.log(course);
