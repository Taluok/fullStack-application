import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const connect = async () => {
    try { 
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB!")
    }catch (error){
        throw(error)
    }
}

mongoose.connection.on("disconected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

const app = express()

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend!")
})