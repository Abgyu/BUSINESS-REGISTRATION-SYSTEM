import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`Connected to the database`);
    } catch (e) {
        console.log(`Error connecting to the database: ${e.message}`);
        process.exit(1);
    }
};

export default connectdb;
