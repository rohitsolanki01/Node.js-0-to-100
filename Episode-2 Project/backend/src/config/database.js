import mongoose from "mongoose";





const connnectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://solankiking619191919_db_user:6xAjo9N13oCriR1o@cluster0.g4l1a72.mongodb.net/devTinder");
    }catch(err){
        console.log(err);
    }
}



export default  connnectDb;