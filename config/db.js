import mongoose from "mongoose";

const connectDB = async (mongoUri, dbName) => {
  if (!mongoUri) {
    console.warn("Warning: MONGO_URI is not set. MongoDB connection skipped.");
    return;
  }
  try {
    await mongoose.connect(mongoUri, {
      dbName: dbName,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export default connectDB;
