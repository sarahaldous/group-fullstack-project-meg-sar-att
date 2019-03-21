const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6969;
const morgan = require("morgan");

// Middlewares
app.use(express.json()); //req.body
app.use(morgan('dev'));

// Routes
app.use('/adulting', require('./routes/adultingRoutes.js'));
app.use("/players", require("./routes/playerRoutes.js"));
app.use("/quests", require("./routes/questRoutes.js"));
app.use("*", (req, res) =>{
    res.send("Error 404? \n" +
        "You failed to hit anything that you intended. Try again.");
    console.log(req)
});


// DB connect
mongoose.connect("mongodb://localhost:27017/adultingDB", {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
});

// Err Handling
app.use((err, req, res, next) => {
    console.error(err);
    return res.send({errMsg: err.message})
});

// Listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
});