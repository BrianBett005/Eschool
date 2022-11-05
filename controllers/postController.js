const Post = require("../models/Post");
const CustomError = require("../errors");
const cloudinary=require("../services/cloudinary")
const { authorizeAdmin } = require("../utils");
const createPost = async (req, res) => {
  let imagesArray=[]
  req.body.author = req.user.userId;
  if (req.body.images) {
    if (req.body.images.size === 1) {
      const result = await cloudinary.uploader.upload(imagesToSave[0], {
        folder: "School",
      });
      const image = { public_id: result.public_id, url: result.secure_url };
      imagesArray.push(image)
    } else {
      const images1 = await Promise.all([
        imagesToSave.map((image) => {
          const result = cloudinary.uploader.upload(image, {
            folder: "School",
          });
          return { public_id: result.public_id, url: result.secure_url };
        }),
      ]);
     imagesArray=[...images1]
    }
    req.body.images=imagesArray;
  }
  const post = await Post.create(req.body);
  res.status(200).json(post);
};
const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.post_id,
    req.body,
    { new: true }
  );
  res.status(200).json(post);
};
const deletePost = async (req, res) => {

  const postToDelete = await Post.findById(req.params.post_id);
  if (!postToDelete) {
    throw new CustomError.BadRequestError(
      `Note with id ${req.params.note_id} not found`
    );
  }
  authorizeAdmin(req.user, postToDelete.author);
  await postToDelete.remove();
  res.status(200).json("Post deleted successfully");
};
const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

module.exports = { createPost,updatePost,deletePost,getAllPosts };
