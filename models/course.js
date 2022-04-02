const mongoose = require("mongoose");
const validator = require("validator");

const courseSchema = new mongoose.Schema({
  courseType: { type: String, min: 5, max: 25, required: true },
  courseName: {
    type: String,
    min: 10,
    required: true,
    validate: {
      validator: (v) => {
        if (validator.isEmpty(v))
          throw new Error("Course name can not be empty");
        return true;
      },
      message: "Course name can not be empty!",
    },
  },
  courseDescription: {
    type: String,
    min: [10, "Description words must be at least " + value],
    max: 150,
  },
  courseCode: {
    type: String,
    required: true,
  },
});

module.exports = courseSchema;
