import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

dotenv.config();
const app = express();
const PORT = 8800;
const MONGO = process.env.MONGO;

const connect = async () => {
    try {
        await mongoose.connect(MONGO);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});

// Middlewares
const authMiddleware = "/auth";
const usersMiddleware = "/users";
const hotelsMiddleware = "/hotels";
const roomsMiddleware = "/rooms";

app.use(authMiddleware, authRoute);
app.use(usersMiddleware, usersRoute);
app.use(hotelsMiddleware, hotelsRoute);
app.use(roomsMiddleware, roomsRoute);

app.listen(PORT, () => {
    connect();
    console.log(`Connected to backend on port ${PORT}`);
});

