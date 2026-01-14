# All About Types

## Type Inference

The compiler can infer types for variables when they are initialized with a value. This means that for primitives, you do not need to explicity declare a type.

## When To Use Type Annotations

- use type inference whenever possible
- annotate input variables on functions

Type inference is becoming more and more powerful with each version of TS that is released.

## Enumerations

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

## Any Type

Any type that the compiler cannot infer will be assigned to the `any` type. This means that anything can be assigned to a variable of `any` type. This effectively bypasses all type-safety. You shouldn't explicitly use `any` type on declarations, and it should only be used as a last resort.

The compiler will sometimes assign `any` to a variable implicitly. This is commonly done on function arguments that aren't explicitly typed. This functionality (implicit any) can be disabled via the `--noImplicitAny` compiler flag.

## Union Types

Union types allow you to assign multiple types to a variable, allowing that variable to accept multiple variable types, i.e. `string` and `number`. This is done with the `|` character in the type declaration. See the [demo file](./fundamentals/07-union-types.ts).

Union types allow for a lot of flexibility, but it is also easily misused.

## Literal Type

Whenever you declare a const with a literal, the type of that variable becomes that literal. For example:

```typescript
// type 10
const count = 10;
```

When combined with union types, you can limit assignments on variables. See the [demo file](./fundamentals/08-literal-types.ts).

## Alias Type

Alias types allow you to declare types inline. This is particularly useful for union type declarations that need to be implemented more than once. This can be done for object declarations as well, but type interfaces are better used for this.

## Interfaces

Interfaces are the proper way to declare custom types. All functionality of an interface also exists within an alias type. Intefaces are open to extension (alias types are not).

- `?` marks a property as optional
- `readonly` keyword makes a property final

## Type Assertions

There are times where you may know about the type of a variable than the compiler, i.e. that an element is an HTML input element instead of a more generic HTML element type. The type inferred by the compiler can be forced with the `as` keyword. This emulates polymorphism from an object-oriented language. This is an alternative to casting which can be done with `<CastedType>` before the value declaration.

You cannot set it to a totally different type. Typically you can only assign it to a more-strict type, though sometimes you know that the assertion can work. See the [demo file](./fundamentals/11-type-assertions.ts) for an example of this.

## Unknown Type

The `unknown` type operates much like the `any` type in that it lets you set any value to a variable of that type. The difference is that you can't set an `unknown` to another type (except `any`).

### Type Narrowing

You can narrow down a type by wrapping it in a type guard like so:

```typescript
unknownValue: unknown = "something";

if (typeof unknownValue == "string") {
    let value: string = unknownValue;
}
```

The other way to narrow a type is via a [type predicate](./fundamentals/19-type-predicate.ts). This special syntax allows the compiler to be sure that all code within the type guard is in fact safe for the type checked. (This all seems very backwards... just use an OO language.)

## Never Type

You cannot assign anything to a variable of type `never`. You cannot do anything with a `never` variable either.

`never` is used by the type inference system when it decides that something is not possible. This is useful for error handling both at compile time and at runtime if something truly unexpected injects a value. See the [demo file](./fundamentals/20-never-type.ts).

## Intersection Types

Intersection types include the properties of all types being intersected. An intersection type can be built similar to a union type but with the `&` operator. This behavior is like multiple inheritance. For example:

```typescript
type Course = HasId & HasTitle;
```
