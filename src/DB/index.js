import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb+srv://ppourgoshtasbi:pc71KxH71oXrIkNM@cluster0.xxfjrqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const setConnection = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
