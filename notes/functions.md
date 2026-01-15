# Functions

## Arrow Functions (Lambdas)

Arrow functions are just shortcuts using `=>` for anonymous function calls. This is similar to lambdas in other languages. Lambdas inherit the `this` context from whatever is wrapping it. If, however, a function is fully defined anonymously via the `function` keyword, it has its own `this` context.

Arrow functions are the preferred way because of the `this` inheritance.

## Default Function Arguments

Any argument can be assigned a default value. This makes the argument optional within its function's invocation. This can be used for all arguments. The compiler will infer types from default values. Default values can be set on arguments in any position, not just the trailing arguments.

## Spread Operator

The spread operator, `...` creates a _shallow_ copy of an object. It can also be used in function arguments that operate like Java varargs.

## Object Destructuring

Using the object notation, you can set multiple variables using the contents of another object. See the [demo file](../fundamentals/16-object-destructuring.ts).
