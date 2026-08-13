require('dotenv').config();
const express = require('express');
const appRouter = require('./routers/appRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the application router at root
app.use('/', appRouter);

// Start listening for connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
