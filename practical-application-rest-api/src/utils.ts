import crypto = require("crypto");
import util = require("util");

const hashPasswordPromise = util.promisify(crypto.pbkdf2);

export function isInteger(input: string) {
    return input?.match(/^\d+$/) ?? false;
}

export async function hashPassword(plainText: string, salt: string) {
    const hash = await hashPasswordPromise(
        plainText,
        salt,
        1000,
        64,
        "sha512"
    );

    return hash.toString("hex");
}