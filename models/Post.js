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
      type: mongoose.Schema.ObjectId,
      ref: "Admin",
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    tags: {
      type: [String],
    },

    averageRating: {
      type: Number,
      default: 0,
    },
    numOfComments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
PostSchema.pre("remove", async function (next) {
  await this.model("Comment").deleteMany({ post: this._id });
});
PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});

module.exports = mongoose.model("Post", PostSchema);
