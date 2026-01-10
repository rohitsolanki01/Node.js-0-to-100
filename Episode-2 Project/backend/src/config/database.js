import mongoose from "mongoose";




const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://solankiking619191919_db_user:6xAjo9N13oCriR1o@cluster0.g4l1a72.mongodb.net/devTinder")
    }catch{
        console.log("Mongoose connection error");
    }

}

export default connectDb;
