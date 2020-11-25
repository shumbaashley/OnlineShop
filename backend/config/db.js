const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true })
        console.log(`Connected to Database : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }

}

module.exports = connectDB