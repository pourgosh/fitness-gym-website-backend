import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/fitness-gym-website";

export const setConnection = async () => {
  try {
    const connectToMongo = await mongoose.connect(MONGO_URI);
    const dbName = connectToMongo.connections[0].name;
    console.log(`connect to mongoDB, name: ${dbName}`);
  } catch (err) {
    console.error(err);
  }
};
