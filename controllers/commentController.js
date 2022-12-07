const Comment = require("../models/Comment");
const cloudinary = require("../services/cloudinary");
const createComment = async (req, res) => {
  if (req.body.image) {
    const result = cloudinary.uploader.upload(req.body.image, {
      folder: "comments",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.image = image;
  }

  const currentTime = Date.now().toString();
  req.body.user = currentTime.toString().substring(currentTime.length - 5);
  const comment = await Comment.create(req.body);
  res.status(200).json(comment);
};

const getAPostComments = async (req, res) => {
  const postComments = await Comment.find({
    post: req.params.postId,
  });
  res.status(200).json(postComments);
};

module.exports = {
  createComment,
  getAPostComments,
};
