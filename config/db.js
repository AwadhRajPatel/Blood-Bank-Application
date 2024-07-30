const mongooes = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongooes.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
