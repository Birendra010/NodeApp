const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController')


router.post('/api/course', courseController.createCourse)
router.get('/api/courses', courseController.getAllCourses)

router.get('/api/course/:id', courseController.getCourseById)








module.exports = router;