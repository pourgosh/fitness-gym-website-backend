import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://ppourgoshtasbi:pc71KxH71oXrIkNM@cluster0.xxfjrqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
export const setConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
};
