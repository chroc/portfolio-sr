const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected: ${conn.connection.host}`.green.bold);
    } catch (error) {
        console.error(`Error connecting DB: ${error.message}`.red.bold);
        process.exit(1);
    }
};

module.exports = connectDB;