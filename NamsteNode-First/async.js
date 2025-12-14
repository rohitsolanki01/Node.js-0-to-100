const fs = require("fs");
const https = require("https");

console.log("Hello world");

let a = 10;
let b = 20;

https.get("https://dog.ceo/api/breeds/image/random", (res) => {
    console.log("fetching data successfully");
});

setTimeout(() => {
    console.log("After 5 sec prints");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("file Data:", data);
});
 
function multiplications(x, y) {
    return x * y;
}

const c = multiplications(a, b);
console.log(c);
