import express from "express";
const app =express();
const PORT = 8080;
import connectDb from "./config/connetion.js";
import signUpValidations from "./utils/validations.js";
import User from "./models/user.js";
import bcrypt from "bcrypt";


app.use(express.json());
app.use(express.urlencoded({extended : true}));




app.get("/test" , (req,res) => {
    res.send("This it the test route foe the testing the server");
});




app.post("/signUp" , async(req,res) => {
    try{
        const {firstName , lastName , email , password} = req.body;

        signUpValidations(req);



        const hashedPassword = await bcrypt.hash(password , 10);

        const user = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword
        });

        await user.save();

        res.status(201).json({message : "User created successfully"})
    }catch(error){
        res.status(500).json({message : error.message})
    }
});




app.get("/users" , async(req,res) => {
    try{

        const users = await User.find({});

        if(!users){
            return res.status(404).json({message : "No users found"})
        }


        res.status(200).json(users)

    }catch(error){
        res.status(500).json({Message : error.message})
    }
});



app.put("/user/:id" , async(req,res) => {
    try{
        const {id} = req.params;
        const {firstName , lastName , email ,password} = req.body;

        signUpValidations(req);

        const hashedPassword = await bcrypt.hash(password , 10);

        const user = await User.findByIdAndUpdate(id , {
            firstName,
            lastName,
            email,
            password : hashedPassword
        }, {new : true , runValidators : true})

        if(!user){
            return res.status(404).json({message : "User not found"})
        }

        res.status(200).json({message : "User updated successfully"})

    }catch(error){
        res.status(500).json({message : error.message})
    }
});



app.post("/login" ,async(req,res) => {
    try{

        const {email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({message : "Email and password are required"})
        }

        const user = await User.findOne({email : email});

        if(!user){
            throw new Error("User are Invalid");
        }

        const isPasswordMatched =  await bcrypt.compare(password , user.password);

        if(!isPasswordMatched){
            throw new Error("Password are Invalid");
        }

        res.status(200).json({message : "User logged in successfully"})

    }catch(error){
        res.status(500).json({message : error.message})
    }
})


connectDb().then(() => {
    console.log("Mongoose connection successful");
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})