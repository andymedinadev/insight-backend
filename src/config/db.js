const mongoose = require("mongoose");
const { MONGODB_URI } = require("./env");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ MongoDB conectado')
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message)
    process.exit(1)
  }
}

module.exports = connectDB;