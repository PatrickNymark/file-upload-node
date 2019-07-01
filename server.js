const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('./config/cloudinary-config');
const errorHandler = require('./helpers/error-handler');

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
app.use(cloudinary.cloudinaryConfig);


// Router middleware
app.use('/api/posts', require('./controllers/post.controller'));

// error handler
app.use(errorHandler);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
