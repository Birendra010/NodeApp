const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController')

router.post('/api/author',courseController.registerAuthor)
router.post('/api/course', courseController.createCourse)
router.get('/api/courses', courseController.getAllCourses)

router.get('/api/course/:id', courseController.getCourseById)
router.put('/api/course/:id',courseController.updateCourse)
router.delete('/api/course/:id',courseController.deleteCourse) // delete one course 

router.delete('/api/course',courseController.deleteCourses) // deelete multipe courses



module.exports = router;