const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6969
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use('/adulting', require('./routes/adulting'))

mongoose.connect("mongodb://localhost:27017/adultingDB", {useNewUrlParser: true}, () => {
    console.log("Connected to the DB")
})

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}")
})