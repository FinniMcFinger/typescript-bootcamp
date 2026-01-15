# Typescript Operations and Language Features

## The Compiler

- to install the Typescript compiler: `npm install -g typescript`
- to compile the file: `tsc 01-why-typescript.ts`
- to run the file: `node 01-why-typescript.js`

Typescript compiles down to Javascript. The Typescript compiler (`tsc`) is responsible for converting the code to valid Javascript. `tsc` can be configured to produce a variety of Javascript flavors for different runtime environments.

If you run `tsc` with the `--noEmitOnError` flag, a compiled JS file will _not_ be generated if there is an error detected. The `--watch` (`-w`) flag will show the compilation steps within the console.

### Configuration

You can use the `tsconfig.json` file to configure flags/options for the compiler to use without manually invoking them at the command line. You can set custom config files via the `--project` (`-p`) flag when executing the compiler, i.e. `tsc -p custom-config.json`.

You can override configs by passing the same configs at the command line. Command line options always override config file settings.

#### Compiler Options

These are controlled via the `compilerOptions` object within the config file. Any of these can also be used at the command line as options as well.

- `target` sets the version of JS to which the compiler generates compiled JS files
- `rootDir` sets the base directory for compile sources
- `outDir` allows you to set a target directory for compiled JS files
- `module` dictates what module syntax should be used, `CommonJS` seems to be the standard {citation needed}
- `noLib` when set to `true` will not include any libraries automatically
- `lib` array allows for explicit declaration of which libraries to include
- `baseUrl` allows you to set the base URL for module imports, allowing you to declare imports without relative paths
- `typeRoots` array allows you to set locations for type defintions
- `types` array allows you to explicitly define types to be included from specific libraries (transitive types included with any entry)
- `skipLibCheck` when set to `true` the compiler will not check type validities
- `allowJs` when set to `true` will allow plain JS files to be included when compiling
- `checkJs` when set to `true` will perform type-safety checks on plain JS files
- `sourceMaps` when set to `true` will generate source maps for all files when compiling
- `noEmitOnError` when set to `true` will stop compiling JS files when there is an error
- `strictNullChecks` when set to `true` will enforce null safety checks
- `noEmit` when set to `true` will prevent the compiler from emitting _any_ compiled JS files at all, good for testing build
- `removeComments` when set to `true` will remove comments from compiled files

#### Files

The `files` array allows you to specify what files are compiled when `tsc` is invoked without a file name. Any files/modules that the designated files import will also be compiled. May times a single entry-point will be made for a project, and that will be set in `files`.

If no files are specified, the `src` directory is used by default, including all TS files.

#### Include and Exclude

The `include` array allows you to include specific files. It also allows for directories and wildcarding.

The `exclude` array works only in conjunction with the `include` array. It specifically excludes things caught by include.

```json
{
    "compilerOptions": {
        "target": "ES2020",
    },
    "include": [
        "src/**/*",
    ],
    "exclude": [
        "src/**/*-exclude-me.ts",
    ],
}
```

## Libraries

When you want to include a 3rd-party library, it must first be installed. Its types must also be included for features like tab-complete and suggestions.

For example, to install the `express` library, first run `npm install express`. Then to include its types, run `npm install -D @types/express`. The `-D` flag adds the types to the `devDependencies` instead of the regular `dependencies` in `package.json`.

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
