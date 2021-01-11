const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/customer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});