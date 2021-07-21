// Server variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const routes = require("./routes");

// Loading environment variables
require("dotenv").config();

// Middleware
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Setting up Cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "hfb-mobile",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Starting the express server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
