import mongoose from "mongoose";
import { config } from "../config/app.config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to Mongo database");
  } catch (error) {
    console.log(`Error connecting to Mongo database ${error}`);
    process.exit(1);
  }
};
