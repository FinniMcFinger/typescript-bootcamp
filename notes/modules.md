# Modules

## Export and Import

Each file is considered its own module/namespace. Variables/types/etc can be made available for other modules with the `export` keyword. These items then need to be imported via `import` in other modules.

Imported items can even be re-exported. The names of re-exported items can be changed with the keyword `as`. A good use case for this is to create an import helper for all the features of a module.

Any TS file that has at least 1 import or export will be automatically converted to a module by the compiler.

## `index.ts`

Whenever a file is named `index.ts`, anything it exports can be referred to via its directory name. I.e. if there is `./some-feature/index.ts`, then things can be import `from "./some-feature` without having to declare a specific file.

## Wildcard Import

The `*` can be used to import all things from a module.

## Default Export

The `default` keyword can be used to give better autocomplete hints of exports. This is best used on commonly imported parts of a module.
