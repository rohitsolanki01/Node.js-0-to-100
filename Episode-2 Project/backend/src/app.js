import express from "express";
const app = express();
const PORT = 8080;
import connectDb from "./config/database.js"
import User from "./models/userModel.js";



app.post("/signUp" , async(req,res) => {
   
    const user = new User({
        firstName : "Rohit",
        lastName : "Solanki",
        email : "rohit@gmail.com",
        password : "123456",
        age : 22,
        gender : "Male"
    })

    await user.save();

    res.send("User registered successfully");
});



connectDb().then( () => {
    console.log("Mongoose connection successful");
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log(err, "Mongoose connection error");
})