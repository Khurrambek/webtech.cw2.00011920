const express = require('express')
const app = express();
const port = 3000 || 5000;

// Declarations with app
app.set("views", "./views")
app.set("view engine", "ejs" )


app.get("/", (req, res) => {
    res.send("Student management system InshaAllah new project with nodejs")
})

app.listen(port, ()=> console.log("Running on " + port))