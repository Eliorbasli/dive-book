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
      type: Number,
    },
    maxDepth: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dive", DiveSchema);
