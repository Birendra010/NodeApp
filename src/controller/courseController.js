const Course = require('../Model/courseModel')
const Author = require('../Model/authorModel')

/////***********create course*******


const registerAuthor = async (req, res) => {
  try {
    let { author, specialization} = req.body;
    if (!author)
      return res.status(400).send({ message: "auther  is required" });
   

    let savedData = await Author.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};






const createCourse = async (req, res) => {
  try {
    let { author, course, tags, price, isPublished } = req.body;
    if (!author)
      return res.status(400).send({ message: "auther  is required" });
    if (!course)
      return res.status(400).send({ message: "course  is required" });

    let savedData = await Course.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};
/// ****** get All course *******
const getAllCourses = async (req, res) => {
  try {
    const allcourse = await Course.find();

    // .count()
    // .skip(2)
    // .limit(5)
    // .find({author:/^bire/})  /// start reguler expresition
    // .find({author:/dra1$/})     /// end reguler expresition
    // .find({price:{$gte:1000, $lte:2000}})
    // .select({author:1,price:1})
    // .sort({price:-1})
    // .or([{author:"birendra"},{author:"abs"}])

    // .and([{author:"birendra1"},{price:2000}])
    return res.status(200).send({ status: true, data: allcourse });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};
//// ****** get course by ID ********
const getCourseById = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.findById({ _id: id });
    if (!course)
      return res
        .status(404)
        .send({ message: "the course with the given ID was not found" });

    return res.status(200).send({ status: true, data: course });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};
///****** */ update course by ID ********
const updateCourse = async (req, res) => {
  try {
    let id = req.params.id;
    const course = await Course.findByIdAndUpdate(
      { _id: id },
      { $set: { course: "gitbase" } },
      { new: true }
    );
    if (!course)
      return res
        .status(404)
        .send({ message: "the course with the given ID was not found" });

    return res.status(200).send({ status: true, data: course });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

//delete course by id

const deleteCourse = async (req, res) => {
  try {
    let id = req.params.id;

    const course = await Course
      // .deleteOne({ _id: id });
      .findByIdAndDelete({ _id: id });
    if (!course)
      return res
        .status(404)
        .send({ message: "the course with the given ID was not found" });

    return res
      .status(200)
      .send({ status: true, message: "course deleted successfully" });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

///delete multiple course

const deleteCourses = async (req, res) => {
  try {
    let author = req.body.author;
  
    let course = await Course
    .find({author:author})
    if (course.length===0)
    return res
      .status(404)
      .send({
        message: "the course with the given auther name was not found",
      })
    
      let courseDel = await Course.deleteMany({ author: author })
 
    return res
      .status(200)
      .send({ status: true, message: "course deleted successfully" });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = {
  updateCourse,
  getCourseById,
  getAllCourses,
  createCourse,
  deleteCourse,
  deleteCourses,
  registerAuthor
};
