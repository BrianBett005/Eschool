const mongoose = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
  {
    school_name: {
      type: String,
      unique: [true, "A school by this name already exists"],
      required: [true, "You must provide a name"],
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address",
      },
      select: false,
    },
    description: {
      type: String,
    },
    motto: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      unique: [true, "This phone number already exists"],
      select: false,
    },
    state: {
      type: String,
      required: true,
    },
    lg: {
      type: Array,
      required: true,
    },
    ownership: {
      type: String,
      default: "Private",
      enum: ["Private", "Public"],
    },
    type: {
      type: String,
      default: "Nursery",
      enum: ["Primary", "Nursery", "Secondary"],
    },
    mgt_no: {
      type: Number,
      required: true,
    },
    owner_name: {
      type: String,
      required: true,
    },
    has_activated: {
      type: Boolean,
      default: false,
    },
    // logo: {
    //   public_id: { type: String, required: true },
    //   url: {
    //     type: String,
    //     required: true,
    //   },
    // },
    logo: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },

    password: {
      type: String,
      required: [true, "You must provide a password!"],
      select: false,
    },
  },
  { timestamps: true }
);
SchoolSchema.index({ name: "name" });
SchoolSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

SchoolSchema.pre("remove", async function (next) {
  await this.model("Note").deleteMany({ school: this._id });
  await this.model("Event").deleteMany({ school: this._id });
  await this.model("Gallery").deleteMany({ school: this._id });
  // await this.model("Result").deleteMany({ school: this._id });
});

SchoolSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
let School = mongoose.model("School", SchoolSchema);

module.exports = School;
