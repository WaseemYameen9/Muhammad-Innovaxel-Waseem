const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    originalUrl: String,
    shorterUrl: String,
    accessCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Url", urlSchema);
