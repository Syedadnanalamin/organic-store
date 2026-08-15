const express = require('express');
const appRouter = require('./routers/appRouter');
const ordersRouter = require('./routers/ordersRouter');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const { connectDB, client } = require('./db');
const cors = require('cors');
dotenv.config();

// Middleware to parse request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectDB();
const db = client.db("organic");
const orders = db.collection("orders");

// routers
app.use('/', appRouter);

app.use("/api/orders", ordersRouter);
app.use("/api/pixel-event", require('./routers/pixelRouter'));


// Start listening for connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
