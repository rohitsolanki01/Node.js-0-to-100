const fs = require("fs");



setTimeout( () => console.log("setTimeOut"));

setImmediate(() => console.log("setImmediate"));


Promise.resolve("Promise").then(() => {
    console.log("Promise")
});

fs.readFile("./file.txt" , "utf8" , () => {
    console.log("File data is REading")
});


process.nextTick( () => {
    process.nextTick(() => console.log("Inner nextTick"));
    console.log("NextTick")
});


console.log("Last Line of the code");



//output




//last line of the code
//nexTick
//inner nextTick
//promise
//setTimeOut
//setImmediant
//file data is Reading