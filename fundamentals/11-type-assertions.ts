// type assertion
const input = document.getElementById("some-id") as HTMLInputElement;

// casting (old way)
const castedInput = 
    <HTMLInputElement> document.getElementById("some-id");

// forced assertion
const forcedInput =
    (document.getElementById("some-id") as any) as string;