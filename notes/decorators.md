# Decorators

Decorators are meant for aspect-oriented programming (AOP). You will typically be using existing decorators. They can be very powerful and serve a number of purposes. They allow you to compose functionality from multiple libraries at one time. Multiple decorators can be applied to the same property to include multiple functionalities.

Decorators serve as a way to inject functionality into classes without extending classes. This gets around complex implementation details and multiple inheritance.

Decorators can be applied to functions as well, injecting additional functionality to methods. The functionality on many decorators is different from the stated functions of the class, for example, injecting structured logging, performance metrics, etc. 

Decorators can even modify how individual fields operate, for example, designating a field as a database ID.

## Creating Method Decorators

To create a function decorator, you have to export a function to handle the decorator. These functions typically use upper camel case, breaking with the norm. Decorator functions have to return a `MethodDecorator` function, known as a decorator factory. It can add functionality before and after the property that it decorates. For example, a logging decorator may inject logging statements before and/or after a function call. The decorator factory has to handle 3 inputs. These 3 inputs contain everything needed to enhance the features of the class at runtime. 

- `target`: a prototype of the entire class that contains the decorator (even if only on a method or field)
- `propertyKey`: the property to which the decorator is being applied
- `descriptor`: a `PropertyDescriptor` that describes if the property value and various flags about the property

Additionally, when defining the decorator factory, it is one of the few instances where you will want to invoke a full function definition instead of an arrow function. This is done to use the correct `this` context when applying the original function call.

A fully-implemented decorator can be found in the [demo file](../decorators/02-method-decorators.ts).

## Creating Class Decorators

Custom class decorators return a `ClassDecorator` factory. It receives only 1 argument, the constructor function of the class. This definition can use an arrow function because there is no `this` context to consider.

Instead of an anonymous function being returned, you can pass in the `Function` argument to the function itself, making the entire function the `ClassDecorator` factory. This also allows you to declare the decorator without parentheses. See the `@Seal` declaration on [declared class](../decorators/01-type-decorators.ts) and the [decorator definition in the demo file](../decorators/03-class-decorators.ts). If the decorator takes arguments, then the parentheses declaration must be used to pass the arguments, and you must use the anonymous inner function to define the factory.

## Creating Property Decorators

Custom property decorators return a `PropertyDecorator` factory. The arguments that the factory function takes depends on the declaration of the property. If the property is static, the argument received is the constructor for the class. Otherwise, it receives the prototype of the constructor function for the class. The second argument will always be a `string` containing the property key.

The `this` context is extremely important, so you must declare things accordingly. See the [demo file](../decorators/04-property-decorators.ts) for a full demonstration.

## Multiple Decorators

Whenever multiple decorators are applied to a property, they execute in order of declaration. You can think of this as wrapping. This can be seen in the [demo file](../decorators/01-type-decorators.ts) with `@Perf()` wrapping all the functionality of the method _and_ also occurring first before, then after `@Log` (also wrapping its calls, not its functionality). If you were to switch their order, you would see `@Log` applied first.