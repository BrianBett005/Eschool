// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    images: {
      type: Array,
    },
    tags: {
      type: [String],
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
PostSchema.pre("remove", async function (next) {
  await this.model("Comment").deleteMany({ post: this._id });
});

module.exports = mongoose.model("Post", PostSchema);
