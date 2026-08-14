const express = require('express');
const appRouter = require('./routers/appRouter');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const { connectDB } = require('./db');
const cors = require('cors');
dotenv.config();

// Middleware to parse request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectDB();

// routers
app.use('/', appRouter);


// Start listening for connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
