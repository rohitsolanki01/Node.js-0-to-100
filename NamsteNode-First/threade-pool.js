const fs = require("fs");
const crypto = require("crypto");




crypto.pbkdf2("password", "salt", 400000, 50, "sha512", () => {
    console.log("1st - crypto done");
});

crypto.pbkdf2("password", "salt", 400000, 50, "sha512", () => {
    console.log("2nd - crypto done");
});


crypto.pbkdf2("password", "salt", 400000, 50, "sha512", () => {
    console.log("3st - crypto done");
});

crypto.pbkdf2("password", "salt", 400000, 50, "sha512", () => {
    console.log("4nd - crypto done");
});

crypto.pbkdf2("password", "salt", 400000, 50, "sha512", () => {
    console.log("5st - crypto done");
});

