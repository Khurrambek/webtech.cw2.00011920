const express = require('express')
const mongoose = require('./db/mongoose')
const app = express();
const port = 3000 || 5000;

// Routes
const indexRouter = require("./routes/index")

// Declarations with app
app.set("views", "./views")
app.set("view engine", "ejs")

// Use route in app
app.use(indexRouter)




app.listen(port, ()=> console.log("Running on " + port))