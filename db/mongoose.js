const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://xurrambek:${process.env.DB_PASSWORD}@student-database.swezn.mongodb.net/student-database?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
