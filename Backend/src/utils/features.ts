
import mongoose from "mongoose"
export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"Ecommerse"
    }).then(()=>{
        console.log("Databse is connected ")
    }).catch(()=>{
        console.log("Database is not comnected")
    })
}

