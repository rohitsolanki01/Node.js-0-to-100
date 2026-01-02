const { Socket } = require("dgram");
const { promises } = require("dns");
const fs = require("fs");
const a = 10;



setImmediate( () => console.log("SetImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("file Data:", data);
});


setTimeout( () => console.log("Timer Expired") , 0);



function printA(){
    console.log("a:" , a);
}


printA();

console.log("Last line of  the code");



//outPut



//a:100
// last line of the code
//timer expired
//SetImmediate
//fill read opration 




// event loop how wokrs 




// event lop have the four pahse 




// in every phase before first chackes the 


// process.nextTick();
// if is so runs first that 

// and second on is 

// promises Callback 

// secodn prmority is to promise call back 




// then first phase is  Timer (setTimeout , setInterval)

// poll pase (api calls , fs , crypto , Http2ServerRequest.get)
// evey n this phase


// checks phase (setImmediate)

// in  this pase is exixute and goes call back in the callback 



// close phase (Socket.close)

// in this is pahas all Socket open closs is happen thisre in this pashse


