# Object-Oriented Programming

Typescript supports object-oriented programming principles and functionality, but most developers don't do much with it. The promise API is also OO.

## Classes

JS does not recognize classes, so when you declare a class in TS, you don't get an actual class when it is compiled. What you get is its constructor function and its prototype.

## Constructor and Member Declarations

TS allows you to shortcut class variable declarations by providing a scope modifier in a constructor. `public` visibility must be explicitly marked in this case. Any class member can be marked readonly meaning that it cannot be changed after instantiation.

```typescript
class Thing {
    constructor(
        private id: number,
        private description: string,
        public readonly location: string
    ) {
        this.id = id;
        this.description = description;
        this.location = location;
    }
}
```

Typescript does not allow multiple constructor implementations, but you can add default values to constructor parameters.

## Getters and Setters

Using the `get` and `set` keywords, you can set a method to be declared like a variable. Often this can lead to name collisions, so it is common practice to rename private member variables to be prefixed with an underscore, so `title` would become `_title`. If we have a `get` and `set` named `title` retrieving and modifying the `_title` field, we can interact with it like a variable, i.e. `thing.title = "Some Title";` and `console.log(thing.title);`. `get` can also be used with calculation methods to make them seem like member variables and aid in implementation.

## Statics

Typescript supports static members via the `static` keyword. Like most languages, statics are accessed via the class interface, not the instance or `this`. Statics can have any access level or be `readonly`.

## Inheritance

Inheritance works like expected. The `protected` keyword exists as well and works as expected.

### Abstract Classes

Abstracts cannot be instantiated. They serve as a template for child classes. Abstract classes allow you to make the constructor member protected (normally not allowed). You can define abstract method interfaces like you would expect. The `abstract` keyword is applied before `class` or before the method interface name. In order to get compile-time warnings for unimplemented abstract method interfaces, you should mark them as `protected`.

```typescript
abstract class SomeClass {
    protected abstract someMethod();
}
```

### Interface

Interfaces define a contract that other classes have to follow, similar to abstracts. Interfaces contain no implementation details. All methods within an interface are abstract by nature. Interfaces are implemented instead of extended. This allows a class to implement multiple interfaces. You cannot declare private or protected members in an interface. Getters and setters can satisfy interface requirements. See `title` implementation for `HasTitle` in the [demo file](../oop/01-classes-intro.ts).

## Singleton Design Pattern

The singleton design pattern ensures that there is only ever 1 running instance of the class designed in this manner. This is good for classes that have an expensive instantiation, i.e. database interfaces. The hallmark of a singleton is a private constructor and constructor access via a static method that checks for the existence of an instance.
