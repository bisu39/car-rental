import mongoose from 'mongoose'
import 'dotenv/config';
export  async function connectDB() {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/car-rental`)
        console.log(
            `MongoDB connected: ${connection.connection.host}`
        );
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        //stops server from executing further
        process.exit(1);
    }
}

