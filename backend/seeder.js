const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('./models.js/Order');
const Product = require('./models.js/Product');
const User = require('./models.js/User');
const products = require('./data/products');
const users = require('./data/users');
const connectDB = require('./config/db');

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        await User.insertMany(users)
        await Product.insertMany(products)

        console.log('Data imported')
        process.exit()
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed')
        process.exit()
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}


if (process.argv[2] === "-d"){
    destroyData()
} else {
    importData()
}