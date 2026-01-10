import express from "express";
const app = express();

const PORT = 8080;

import {adminAuth , userAuth} from "./middlewares/authMiddleware.js" 

app.use("/admin" , adminAuth);


app.get("/admin/getAllData" , (req,res) => {
    res.send("Admin getAllData")
})

app.delete("/admin/deleteUser" , (req,res) => {
    res.send("Admin  is delete User")
})

app.get("/user" , userAuth, (req,res) => {
    res.send("User is get all Data")
})



app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})