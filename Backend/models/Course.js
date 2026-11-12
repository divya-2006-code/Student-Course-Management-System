
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true
    },

    courseCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true
    },

    instructor: {
      type: String,
      required: true,
      trim: true
    },

    duration: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    level: {
      type: String,
      default: "Beginner"
    },

    status: {
      type: String,
      default: "Active"
    },

    imageUrl: {
      type: String,
      default: ""
    },

    description: {
      type: String,
      default: ""
    },

    price: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
