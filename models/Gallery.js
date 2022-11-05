const mongoose = require("mongoose");
const GallerySchema = new mongoose.Schema(
  {
    images: {
      type: Array,
      default: [],
    },
    school: {
      type: mongoose.Types.ObjectId,
      ref: "School",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
