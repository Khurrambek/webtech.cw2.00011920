const express = require("express");
const router = express.Router();

// * MODELS
const Student = require("../models/student");
const Course = require("../models/course");

//Main dashboard
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    if (!students) return res.send("Students not found");
    const courses = await Course.find();
    if (!courses) return res.send("Courses not found");
    res.render("index", { students, courses });
  } catch (error) {
    res.send("internal server error");
  }
});

module.exports = router;
