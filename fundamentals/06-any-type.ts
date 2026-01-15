let count:any = 10;
let things:any[] = [10, 20, "Ahoy", true];
// totally acceptable reassignment because of `any` type
count = "Great Scott!";

console.log(count);

function printAny(something) {
    console.log(something);
}

printAny("Hello there");
printAny(true);
