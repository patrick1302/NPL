const express = require("express");

const router = express.Router();
const CustomerConnection = require("./controllers/CustomerController");

router.post("/customer",CustomerConnection.create);

module.exports = router;