const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/clinic"

const connectDB = async() =>{
    await mongoose.connect(URI);
    console.log('DB Connected');
}

module.exports = {connectDB}