const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const products = require('./data/products')
const app = express()

app.use(cors())

app.get('/api/products/', (req,res) => {
    return res.json(products)
})

app.get('/api/products/:id', (req,res) => {
    const product = products.find(p => p._id === req.params.id)
    return res.json(product)
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to Database"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`)) 