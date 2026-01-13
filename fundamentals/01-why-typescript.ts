/*
Changing the name of this variable will give a compile-time error before the code is ever run.
*/
const courseName = "Typescript Bootcamp"
printCourseName(courseName);

/*
Typescript gives compile-time errors instead of runtime errors like normal JS.
*/
// printCourseName(100);
// printCourseName([0, 1, 2]);

function printCourseName(name: string) {
    console.log("The course name is: " + name.toUpperCase());
}

/*
Typescript adds static types to Javascript that enables refactoring, autocomplete, 
and compile-time errors.
*/

// to run, `node 01-why-javascript.ts`