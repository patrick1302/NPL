const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
    },
    cpfCnpj: {
      type: String,
      trim: true,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
      trim: true
    },
    long: {
      type: Number,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);


const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;