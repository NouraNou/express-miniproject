const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error connecting to db", error);
  }
};

module.exports = connectDB;
