// type will be the literal value for these const vars
const someString = "Great Scott!";
const count = 10;

// constraining the allowed values
let pageSize: 10 | 15 | 20 = 10;
// compile error
// pageSize = 11;