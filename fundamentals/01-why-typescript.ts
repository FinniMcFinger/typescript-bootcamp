const courseName = "Finni's Typescript Bootcamp Experience"
printCourseName(courseName);
// printCourseName(100);
// printCourseName([0, 1, 2]);

function printCourseName(name: string) {
    console.log("The course name is: " + name.toUpperCase());
}