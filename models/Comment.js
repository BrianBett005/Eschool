const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    title: {
      type: String,
      maxlength: [600, "A comment can't be longer than 600 characters"],
    },
    image: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

CommentSchema.statics.calculateAverageRating = async function (postId) {
  const result = await this.aggregate([
    { $match: { post: postId } },
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
        numOfComments: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model("Post").findOneAndUpdate(
      { _id: postId },
      {
        averageRating: Math.ceil(result[0]?.averageRating || 0),
        numOfComments: result[0]?.numOfComments || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

CommentSchema.post("save", async function () {
  await this.constructor.calculateAverageRating(this.post);
});

CommentSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.post);
});

module.exports = mongoose.model("Comment", CommentSchema);
