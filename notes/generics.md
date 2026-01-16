# Generics

Generics are a very powerful feature that allow you to implement code that will work for a variety of types instead of a single type. Many frameworks and libraries rely heavily on generics. Generics define a type via the `<>` syntax.

Some common libraries that use generics include, but are not limited to:

- promises
- partials (optionals)
- readonly

## Read Only

This interface allows creation of immutable versions of mutable types. This allows you to create immutable objects of a type without having to declare a wholly separate type.

## Generic Functions

Imagine you have multiple interfaces for which you want to provide a `freeze` function that returns a `Readonly` type. You could create a separate `freeze` function for each interface, but this would result in a lot of code duplication and be hard to maintain. Instead, you can create a single generic function that can handle any type. The compiler infers the output types for generic functions based on the input type, though you can still declare the type with generic syntax on generic method invocations. These two calls are equivalent:

```typescript
genericMethod<MyType>(something);
freeze(something);
```

Typescript generic functions become even more powerful when they [return union types](../generics/05-merge-generic-functions.ts).

## Generic Classes

Generic classes can be created in a similar manner to generic functions. The generic types are declared with the class definition, and the generics are passed via constructor.

```typescript
class GenericClass<T> {
    constructor(public readonly field: T) {
    }
}

const thing = new GenericClass("some string");
let val = thing.field; // type string
```

## Type Constraints

You can constrain the type passed into a generic via the `extends` keyword. For example, if you don't want a generic to work with primitives, you can declare that the type must extend `Object`, for example:

```typescript
function freeze<T extends Object>(input: T): Readonly<T> {
    return Object.freeze(input);
}
```

This constraint extension check can be used on a type/class or interface. It has added benefits when used with the `keyof` operator. See this in action in the [demo file](../generics/06-keyof.ts).
