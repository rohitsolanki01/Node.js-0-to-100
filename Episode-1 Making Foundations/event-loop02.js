const fs = require("fs");


const a = 10;

setImmediate( () => console.log("SetImmediate"));


Promise.resolve("Promise").then( () => {
    console.log("Promise");
})


fs.readFile("./file.txt" , "utf8" , (err,data) => {
    console.log("File Reade: " , data);
})



setTimeout( () => console.log("SetTime Out Time Expired"));



process.nextTick( () => console.log("Process.NextTick()"));



function printA (){
    console.log(a)
}


printA();


console.log("Last Line Of the Code");

