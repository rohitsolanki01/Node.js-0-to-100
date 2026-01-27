import mongoose from "mongoose";




const connectDb= async () => {
    await mongoose.connect("mongodb+srv://rohitsolanki0473_db_user:UVAhtMaHB8LCMjbH@cluster0.qebnlrj.mongodb.net/prectice-all")
}


export default connectDb