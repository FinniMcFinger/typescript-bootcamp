# Object-Oriented Programming

Typescript supports object-oriented programming principles and functionality, but most developers don't do much with it. The promise API is also OO.

## Member Declarations

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

## Getters and Setters

Using the `get` and `set` keywords, you can set a method to be declared like a variable. Often this can lead to name collisions, so it is common practice to rename private member variables to be prefixed with an underscore, so `title` would become `_title`. If we have a `get` and `set` named `title` retrieving and modifying the `_title` field, we can interact with it like a variable, i.e. `thing.title = "Some Title";` and `console.log(thing.title);`.
