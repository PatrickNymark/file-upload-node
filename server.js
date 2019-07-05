const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./helpers/error-handler');
const cloudinary = require('cloudinary');

// Initialize
const app = express();

// env config
require('dotenv').config();

// Database config
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// Body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router middleware
app.use('/api/posts', require('./controllers/post.controller'));

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// error handler
app.use(errorHandler);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
