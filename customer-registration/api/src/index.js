const express = require("express");
require("./db/mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
  next(error);
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});