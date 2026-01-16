const someData = {
    id: "abc123",
    desc: "something"
}

const moreData = {
    barcode: "003234",
    price: 1.99
}

// provides no type safety
function unsafeMerge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

// provides type safety and inference via inputs
export function merge<T, U> (obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U);
}

// type `any`, no type safety or benefits
const mergedAny = unsafeMerge(someData, moreData);

// union type that provides type safety and benefits
const mergedSafe = merge(someData, moreData);
