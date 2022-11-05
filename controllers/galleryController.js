const School = require("../models/School");
const Gallery = require("../models/Gallery");
const cloudinary = require("../services/cloudinary");
const CustomError = require("../errors");

const addImages = async (req, res) => {
  const schoolExists = await School.findById(req.params.school_id);
  if (!schoolExists) {
    throw new CustomError.BadRequestError(
      `A school with id ${req.params.school_id} doesn't exist`
    );
  }
  const schoolGalleryExists = await Gallery.findOne({
    school: req.params.school_id,
  });
  const imagesToSave = req.body.images;
  if (schoolGalleryExists) {
    if (imagesToSave.size === 1) {
      const result = await cloudinary.uploader.upload(imagesToSave[0], {
        folder: "School",
      });
      const image = { public_id: result.public_id, url: result.secure_url };
      await schoolGalleryExists.updateOne({ images: { $addToSet: image } });
    } else {
      const images1 = await Promise.all([
        imagesToSave.map((image) => {
          const result = cloudinary.uploader.upload(image, {
            folder: "School",
          });
          return { public_id: result.public_id, url: result.secure_url };
        }),
      ]);
      await schoolGalleryExists.updateOne({
        images: { $addToSet: [...images1] },
      });
    }
  } else {
    if (imagesToSave.size === 1) {
      const result = await cloudinary.uploader.upload(imagesToSave[0], {
        folder: "School",
      });
      const image = { public_id: result.public_id, url: result.secure_url };
      await Gallery.create({ images: image, school: req.params.school_id });
    } else {
      const images1 = await Promise.all([
        imagesToSave.map((image) => {
          const result = cloudinary.uploader.upload(image, {
            folder: "School",
          });
          return { public_id: result.public_id, url: result.secure_url };
        }),
      ]);
      await Gallery.create({
        images: [...images1],
        school: req.params.school_id,
      });
    }
  }
  res.status(200).json("Images saved to gallery successfully");
};
const deleteImages = async (req, res) => {
  const imagesToDelete = req.body.images;
  const schoolGallery = await Gallery.findOne({
    school: req.params.school_id,
  });
  if (imagesToDelete.size > 1) {
    await Promise.all([
      imagesToDelete.map((image) => {
        cloudinary.uploader.destroy(image.public_id).then(() => {
          schoolGallery.updateOne({ images: { $pull: image } });
        });
      }),
    ]);
  } else {
    cloudinary.uploader.destroy(imagesToDelete[0]?.public_id).then(() => {
      schoolGallery.updateOne({ images: { $pull: imagesToDelete[0] } });
    });
  }
};
const getASchoolImages = async (req, res) => {
  const images = await Gallery.find({ school: req.params.school_id });
  res.status(200).json(images);
};

module.exports = {
  addImages,
  deleteImages,
  getASchoolImages,
};
