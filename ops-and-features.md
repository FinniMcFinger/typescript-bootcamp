# Typescript Operations and Language Features

## The Compiler

- to install the Typescript compiler: `npm install -g typescript`
- to compile the file: `tsc 01-why-typescript.ts`
- to run the file: `node 01-why-typescript.js`

Typescript compiles down to Javascript. The Typescript compiler (`tsc`) is responsible for converting the code to valid Javascript. `tsc` can be configured to produce a variety of Javascript flavors for different runtime environments.

If you run `tsc` with the `--noEmitOnError` flag, a compiled JS file will _not_ be generated if there is an error detected. The `--watch` (`-w`) flag will show the compilation steps within the console.

## Running in a web browser

- begin with `npm init` to create a `package.json` file
- install a local server with `npm install lite-server`
- run the server with `npm start`

`lite-server` allows hot-reload, so as soon as you change the compiled file (i.e. recompile), you will see the changes in the browser (automatic reload).

## Variable Declaractions

- `const` makes a variable reference immutable (not the value).
- `let` makes a variable reference mutable, so it can be reassigned later in the program.
- Both `const` and `let` compile back to a `var`. Both `const` and `let` are scoped where var is not.

## Template Strings

Template strings can be created with backtick characters: \`. This allows for injecting variable values directly into a string instead of concatenating. This allows for more readable string constructions within code.

## Optional Chaining

Typescript allows for easier null/undefined safety checks with optional chaining via the `?` operator. For example:

```typescript
let course = null;

if (course?.title) {
    console.log(`title: ${course.title}`);
}
```

This will only evaluate to `true` when course is defined, not null, and its `title` property is set.

### Null Coalescing

The `??` operator allows you to provide a default value when an evaluation returns null or undefined. It is similar to the `||` operation when setting a default on a `false` result (`var title = false || "default title";`). For example:

```typescript
let course = null;
let title = course?.title ?? "No title given";

// should print "No title given"
console.log(title);
```

### Non-null Assertion Operator

Since we can set a type to be `null` (either alone of via union types), we can lose some null-safety. The `--strictNullChecks` flag can be passed to the compiler to enforce null safety.

Alternatively, you may know that the value of a variable is not null, so you can override even the strict check by suffixing the variable name with `!` when invoking it. This should be used sparingly. If for some reason the variable is actually null, it will still throw an error at runtime.

```typescript
let someVar: number | null = null;
console.log(someVar!.toString());
```

## Debugging

You can debug easily in the browser via the `debugger` statement. A breakpoint will be added wherever there is a `debugger` statement. This is done with the compiled Javascript.

Debugging with the Typescript requires using the `--sourceMap` flag on the compiler. This allows you to debug in the browser with the source TS files.

Since any TS program can run in `node`, you can debug when you run it in node with the `--inspect` flag. Using the `--inspect-brk` flag will allow you to attach a different debugger to the process.
