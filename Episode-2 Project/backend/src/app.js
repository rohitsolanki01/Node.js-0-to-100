import express from "express";
const app = express();

const PORT = 8080;



app.get("/test" , (req,res) => {
    res.send("Test Route for  the Server")
});


app.get("/user/:userId/:name/:nickname",(req,res) => {
    console.log(req.params);                
    res.send({
        firstName : "Rohit",
        lastName : "Solnaki",
        city : "Wadhwan"
    })
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})