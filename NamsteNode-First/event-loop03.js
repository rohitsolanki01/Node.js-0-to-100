const fs =  require("fs");

setImmediate( () => console.log("SetImmediate"));

setTimeout( () => console.log("First setTimeOut"));

Promise.resolve("Promise").then( () => {
    console.log("Promise")
});

fs.readFile("./file.txt" , "utf8" , () => {
    setTimeout( () => console.log("2d setTimeOut"));

    process.nextTick(() => console.log("2d nextTick"));

    setImmediate(() => console.log("2 immediate"));

    console.log("File Data is Readed");
});


process.nextTick( () => console.log("process nextTick"));


console.log("LastLine of  the Code");




//output of the code




//lastLine of the code
//process nextTick
//promise
//first setTimeout
//SetImmediate
//file data read
// 2d nextTick
//2 immediate
// 2d setTimeOut


