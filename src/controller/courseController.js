const courseModel = require("../Model/model");

const createCourse = async (req, res) => {
  try {
    let { author, course, tags, price, isPublished } = req.body;

    let savedData = await courseModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};
module.exports.createCourse = createCourse;

const getAllCourses = async (req, res) => {
  try {
    const allcourse = await courseModel.find({ isPublished: false });
    return res.status(200).send({ status: true, data: allcourse });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};
module.exports.getAllCourses = getAllCourses;

const getCourseById = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await courseModel.findById({ _id: id });

    return res.status(200).send({ status: true, data: course });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.getCourseById = getCourseById;
