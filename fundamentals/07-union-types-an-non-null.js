var primaryKey = "abc-123";
// totally legal reassignment
primaryKey = 1;
/*
Note the use of parentheses to allow both types within the array.
Without the parenthesis, `keys` would allow either a `string` or a
`number[]` value.
*/
var keys = ["abc-123", 1];
// null types
var courseId = null;
// undefined types
var someVar;
// non-null assertion, even bypasses `--strictNullChecks`
console.log(courseId.toString());
