import mongoose, { connect } from "mongoose";
const connectDB=async()=>{
    try{

        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("mongo db sucessfully  connected")
    } catch(error){
        console.log("MONGO DB CONNECTION FAILED",error)
        }}
        export default connectDB
        