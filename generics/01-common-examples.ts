// This gives all the behavior of Array with type safety of the elements within it.
const numbers = new Array<number>();

numbers.push(10);

// this would generate a compile error
// numbers.push("Great Scott!");

// without declaring a generic parameter, the Promise becomes type `unknown`
const promise = new Promise<string>((resolve, reject) => {
    resolve("Great Scott!");
});
promise.then((value) => {});
