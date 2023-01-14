const mongoose = require("mongoose");

const DiveSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
      min: 3,
    },
    date: {
      type: String,
    },
    temperature: {
      type: Number,
    },
    gasStart: {
      type: Number,
    },
    gasEnd: {
      type: Number,
      min: 0,
    },
    diveTime: {
      type: String,
    },
    diveLength: {
      type: Number,
    },
    maxDepth: {
      type: Number,
    },
    typeWater : {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dive", DiveSchema);
