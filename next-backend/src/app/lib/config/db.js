import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose
    .connect(
      "mongodb+srv://editsky597:bJ5Sh5U4XP0AWr9W@cluster0.9umqn8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 "
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
};
