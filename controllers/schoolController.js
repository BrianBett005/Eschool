const School = require("../models/School");
const cloudinary = require("../services/cloudinary");
const CustomError = require("../errors");
const { authorizeUser, schoolTokenPayload, createJWT } = require("../utils");

const createSchool = async (req, res) => {
  const schoolExists = await School.findOne({
    school_name: req.body.school_name,
  });
  if (schoolExists) {
    throw new CustomError.BadRequestError(
      `A School with name ${req.body.school_name} already exists`
    );
  }
  const schoolExistsPhone = await School.findOne({
    phone: req.body.phone,
  });
  if (schoolExistsPhone) {
    throw new CustomError.BadRequestError(
      `A School with phone ${req.body.phone} already exists`
    );
  }
  const schoolExistsEmail = await School.findOne({
    email: req.body.email,
  });
  if (schoolExistsEmail) {
    throw new CustomError.BadRequestError(
      `A School with email ${req.body.email} already exists`
    );
  }
  if (req.body.logo) {
    const result = await cloudinary.uploader.upload(req.body.logo, {
      folder: "School",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.logo = image;
  }
  const createdSchool = await School.create(req.body);
  const schoolToken = schoolTokenPayload(createdSchool);
  const token = createJWT({ payload: schoolToken });

  res.status(200).json({ school: createdSchool, token });
};
const loginSchool = async (req, res) => {
  let school;
  if (req.body.email) {
    const email = req.body.email;
    school = await School.findOne({ email }).select("+password");
  } else {
    school = await School.findOne({ school_name: req.body.school_name }).select(
      "+password"
    );
  }
  if (!school) {
    throw new CustomError.UnauthenticatedError("School doesn't exist");
  }
  const isPasswordCorrect = await school.comparePassword(req.body.password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Wrong password");
  }

  const schoolToken = schoolTokenPayload(school);
  const token = createJWT({ payload: schoolToken });
  res.status(200).json({ school, token });
};

const getSchool = async (req, res) => {
  const school = await School.findById(req.params.school_id);
  if (!school) {
    throw new CustomError.NotFoundError("The requested School was not found");
  }
  res.status(200).json(school);
};

const searchSchool = async (req, res) => {
  const query = req.query.school;
  const schools = await School.find({
    name: { $regex: query, $options: "i" },
  });
  const activeSchools = schools.filter(
    (school) => school.has_activated === true
  );
  res.status(200).json(activeSchools);
};

const getAllSchools = async (req, res) => {
  const schools = await School.find({ has_activated: true });
  res.status(200).json(schools);
};

const updateSchool = async (req, res) => {
  const schoolToUpdate = await School.findById(req.school.school_id);
  if (!schoolToUpdate) {
    throw new CustomError.NotFoundError("The requested school was not found");
  }
  if (req.body.logo) {
    const result = await cloudinary.uploader.upload(req.body.logo, {
      folder: "School",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.logo = image;
  }
  if (req.body.banner) {
    const result = await cloudinary.uploader.upload(req.body.banner, {
      folder: "School",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.banner = image;
  }
  authorizeUser(req.school, schoolToUpdate.school_name);
  await schoolToUpdate.updateOne(req.body, {
    runValidators: true,
    new: true,
  });
  schoolToUpdate.save();
  const schoolToken = schoolTokenPayload(schoolToUpdate);
  const token = createJWT({ payload: schoolToken });

  res.status(200).json({ school: schoolToUpdate, token });
};

const deleteSchool = async (req, res) => {
  const schoolToDelete = await School.findById(req.school.school_id);
  if (!schoolToDelete) {
    throw new CustomError.NotFoundError("The requested school was not found");
  }

  authorizeUser(req.school, schoolToDelete.school_name);
  await schoolToDelete.remove();
  res.status(200).json("School deleted successfully");
};

module.exports = {
  createSchool,
  getSchool,
  searchSchool,
  getAllSchools,
  updateSchool,
  loginSchool,
  deleteSchool,
};
