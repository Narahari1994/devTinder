const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://naraharivasantham9999:41nw6XSG3MNi5tOz@cluster0.cgwbo.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
