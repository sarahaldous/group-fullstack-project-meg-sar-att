const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6969
const morgan = require("morgan")

// Middlewares
app.use(express.json()) //req.body
app.use(morgan('dev'))

// Routes
app.use('/adulting', require('./routes/adultingRoutes.js'))

// DB connect
mongoose.connect("mongodb://localhost:27017/adultingDB", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})

// Err Handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

// Listen
app.listen(PORT, () => {
    console.log("[+] Server is running on port ${PORT}")
})