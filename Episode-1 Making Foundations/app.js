const calculatesum = require("./sum.js");

require("./xyz.js")
require("./sum.js")
let name = "Rohit "

let sName = "Solanki"



let FullName = name + sName;

console.log(FullName);
let a =10;
let b = 20


calculatesum(a,b)



console.log("This the console log globle object");

console.log(globalThis === global)