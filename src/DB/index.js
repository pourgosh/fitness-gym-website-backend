import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb+srv://ppourgoshtasbi:pc71KxH71oXrIkNM@cluster0.xxfjrqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const setConnection = async () => {
  try {
    const connectToMongo = await mongoose.connect(MONGO_URI);
    const dbName = connectToMongo.connections[0].name;
    console.log(`connect to mongoDB, name: ${dbName}`);
  } catch (err) {
    console.error(err);
  }
};
