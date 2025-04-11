import mongoose from "mongoose";

export default async function connectToDB(){
    try {
        await mongoose.connect('mongodb+srv://kleopoldo:LEOPOLD2@cluster0.7q7ds87.mongodb.net/')
        console.log('Database connected successfully')
    } catch(e){
        console.log(e);
    }
}