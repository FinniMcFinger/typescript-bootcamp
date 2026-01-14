# Typescript Bootcamp Notes

## Fundamentals

Typescript is a superset of Javascript. All JS programs are valid TS programs, but not the other way around. TS adds static types to JS that enables easier refactoring, auto-complete, and compilation errors. This aids in discovering errors and bugs much earlier.

- custom types should use TitleCase

### tsc

- to install the Typescript compiler: `npm install -g typescript`
- to compile the file: `tsc 01-why-typescript.ts`
- to run the file: `node 01-why-typescript.js`

Typescript compiles down to Javascript. The Typescript compiler (`tsc`) is responsible for converting the code to valid Javascript. `tsc` can be configured to produce a variety of Javascript flavors for different runtime environments.

If you run `tsc` with the `--noEmitOnError` flag, a compiled JS file will _not_ be generated if there is an error detected. The `--watch` (`-w`) flag will show the compilation steps within the console.

### Running in a web browser

- begin with `npm init` to create a `package.json` file
- install a local server with `npm install lite-server`
- run the server with `npm start`

`lite-server` allows hot-reload, so as soon as you change the compiled file (i.e. recompile), you will see the changes in the browser (automatic reload).

### Variable Types

- `const` makes a variable reference immutable (not the value).
- `let` makes a variable reference mutable, so it can be reassigned later in the program.
- Both `const` and `let` compile back to a `var`. Both `const` and `let` are scoped where var is not.

### Template Strings

Template strings can be created with backtick characters: \`. This allows for injecting variable values directly into a string instead of concatenating. This allows for more readable string constructions within code.

### Type Inference

The compiler can infer types for variables when they are initialized with a value. This means that for primitives, you do not need to explicity declare a type.

#### When To Use Type Annotations

- use type inference whenever possible
- annotate input variables on functions

Type inference is becoming more and more powerful with each version of TS that is released.

### Optional Chaining

Typescript allows for easier null/undefined safety checks with optional chaining via the `?` operator. For example:

```typescript
let course = null;

if (course?.title) {
    console.log(`title: ${course.title}`);
}
```

This will only evaluate to `true` when course is defined, not null, and its `title` property is set.

#### Null Coalescing

The `??` operator allows you to provide a default value when an evaluation returns null or undefined. It is similar to the `||` operation when setting a default on a `false` result (`var title = false || "default title";`). For example:

```typescript
let course = null;
let title = course?.title ?? "No title given";

// should print "No title given"
console.log(title);
```

### Enumerations

Enumerations can be declared with the `enum` keyword. When compiled, the values are translated to numbers. Numeric values can be assigned to each enum entry to override the default number assigned to it when compiled. The numbers assigned to the enum values start at `0` and increment for each successive value. If the number value is overwritten, the values will increment _after and from_ the overridden value. For example:

```typescript
enum CourseType {
    FREE, // 0
    PREMIUM = 10, // 10
    PRIVATE, // 11
    HIDDEN // 12
};
```

For better debugging and readability, string values can be passed to override the runtime values of the enum. See the [demo file](./fundamentals/05-enums.ts) for this in action.

### `any` Type

Any type that the compiler cannot infer will be assigned to the `any` type. This means that anything can be assigned to a variable of `any` type. This effectively bypasses all type-safety. You shouldn't explicitly use `any` type on declarations, and it should only be used as a last resort.

The compiler will sometimes assign `any` to a variable implicitly. This is commonly done on function arguments that aren't explicitly typed. This functionality (implicit any) can be disabled via the `--noImplicitAny` compiler flag.

### Union Types

Union types allow you to assign multiple types to a variable, allowing that variable to accept multiple variable types, i.e. `string` and `number`. This is done with the `|` character in the type declaration. See the [demo file](./fundamentals/07-union-types.ts).

Union types allow for a lot of flexibility, but it is also easily misused.

#### Non-null Assertion Operator

Since we can set a type to be `null` (either alone of via union types), we can lose some null-safety. The `--strictNullChecks` flag can be passed to the compiler to enforce null safety.

Alternatively, you may know that the value of a variable is not null, so you can override even the strict check by suffixing the variable name with `!` when invoking it. This should be used sparingly. If for some reason the variable is actually null, it will still throw an error at runtime.

```typescript
let someVar: number | null = null;
console.log(someVar!.toString());
```
