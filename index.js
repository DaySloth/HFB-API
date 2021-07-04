// Server variables
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to the Mongo DB
// const mongoose = require("mongoose");
// mongoose.connect(
//   `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ehpyg.mongodb.net/Congo?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );

// Starting the express server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
