type Status = "ready" | "not-ready";
let myStatus: Status;

if (myStatus == "ready" || myStatus == "not-ready") {
    console.log(myStatus);
} else {
    // This will resolve as type `never`.
    const value = myStatus;

    unexpectedError(value);
}

function unexpectedError(value:never) {
    throw new Error(`unexpected value: ${value}`);
}
