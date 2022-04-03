const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://xurrambek:xurram200`@student-database.swezn.mongodb.net/student-database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
