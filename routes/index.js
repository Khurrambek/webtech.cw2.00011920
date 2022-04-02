const express = require("express")
const router = express.Router()

//Main dashboard
router.get("/", (req, res) => {
    res.render('index', {text: "Main Dashboard"})
})

module.exports = router;