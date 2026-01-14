let primaryKey: string | number = "abc-123";
// totally legal reassignment
primaryKey = 1;

/*
Note the use of parentheses to allow both types within the array. 
Without the parenthesis, `keys` would allow either a `string` or a
`number[]` value.
*/
const keys: (string | number) [] = ["abc-123", 1];

// null types
let courseId: number | null = null;

// undefined types
let someVar: string | undefined;

// non-null assertion, even bypasses `--strictNullChecks`
console.log(courseId!.toString());