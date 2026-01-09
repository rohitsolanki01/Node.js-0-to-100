import express from "express";
const app = express();

const PORT = 8080;



app.get("/test" , (req,res) => {
    res.send("Test Route for  the Server")
});


// app.get("/user/:userId/:name/:nickname",(req,res) => {
//     console.log(req.params);                
//     res.send({
//         firstName : "Rohit",
//         lastName : "Solnaki",
//         city : "Wadhwan"
//     })
// });


// app.use(
//   "/user",
//   (req, res,next) => {
//     console.log("Handling the router!!");
//     next();
//     res.send("Response ");
//   },
//   (req, res) => {
//     console.log("Handling the second Router");
//     res.send("Response from the second router");
//   }
// );




app.use("/user" , (req,res,next) => {
    console.log("Handale route first 1 !!!");
    next();
},
(req,res,next) => {
console.log("Handale route second 2 !!!");
next()
},
(req,res,next) => {
    console.log("Handale route third 3 !!!");
    next()
},
(req,res) => {
    console.log("Handale route fourth 4 !!!");
res.send("Response from the fourth router");    
}

);

app.get("/user/:id" , (req,res) => {
    console.log(req.params);
    res.send("User Route");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})