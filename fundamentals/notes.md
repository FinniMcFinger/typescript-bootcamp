# Typescript Bootcamp Notes

## Fundamentals

- to install the Typescript compiler: `npm install -g typescript`
- to compile the file: `tsc 01-why-typescript.ts`
- to run the file: `node 01-why-typescript.js`

Typescript is a superset of Javascript. All JS programs are valid TS programs, but not the other way around. TS adds static types to JS that enables easier refactoring, auto-complete, and compilation errors. This aids in discovering errors and bugs much earlier.

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
