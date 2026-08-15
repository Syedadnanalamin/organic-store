require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let cachedDb = null;

const connectDB = async () => {
    // If we already have a connection, return it
    if (cachedDb) {
        return cachedDb;
    }

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        cachedDb = client.db("organic");
        return cachedDb;
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error; // Throw error to be caught by Express handlers instead of exiting
    }
};

module.exports = {
    connectDB,
    client
};