class KeyValueUnsafe {
    constructor(
        public readonly key: any,
        public readonly value: any
    ) {}
}

// generics give type safety
export class KeyValue<K, V> {
    constructor(
        public readonly key: K,
        public readonly value: V,
    ) {}
}

const unsafe1 = new KeyValueUnsafe("1", 10);
const unsafe2 = new KeyValueUnsafe(2, "Great Scott!");
// any type, no type safety
let unsafeVal1 = unsafe1.value;
let unsafeVal2 = unsafe2.value;

const safe1 = new KeyValue("1", 10);
const safe2 = new KeyValue(2, "Great Scott!");
// type safety via type inference
let safeVal1 = safe1.value;
let safeVal2 = safe2.value;
