import mongoose  from "mongoose";




const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim :true,
        minLength : 3,
        maxLength : 20
    },
    lastName : {
        type : String,
        trim : true,
        minLength : 3,
        maxLength : 20
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim:true,
    },
    password : {
        type : String,
        required : true,
        trim :true,
        min : 8,
        max:20
    }
})


const User = mongoose.model("User" , userSchema);


export default User;