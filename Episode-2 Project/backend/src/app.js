import express from "express";
import connnectDb from "./config/database.js";
import User from "./models/userModel.js";
const app = express();
const PORT = 8080;


app.use(express.json())



app.get("/test" , (req,res) => {
 res.send("This it the test route foe the testing the server");
});


app.post("/signUp" , async (req,res) => {
    try{

        const user = await new User(req.body);
        await user.save();
        res.status(201).send(user);
    }catch(error){
        console.log(error);  
    }
});




app.get("/feed" , async(req,res) => {
    try{
        
     const users = await User.find({});
        if(users.length ===0){
            res.status(200).send("No users found");
        }
        res.status(200).send(users);
    }catch(error){
        console.log(error);
    }
});



app.get("/getUser" ,async (req,res) =>{
    try{

        const  user = await User.find({email : req.body.email});
        if(user.length ===0){
            res.status(200).send("No user found");
        }
        res.status(200).send(user);
    }catch(error){
        console.log(error);
    }
    
})

connnectDb().then(() => {
    console.log("Mongoose connection successful");
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})