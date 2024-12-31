import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fullstackProject:33858627@cluster0.rtgi3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}