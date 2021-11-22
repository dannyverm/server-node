const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    getStudentByName,
    addStudent
} = require('../model/model')

// query /students?name=leo&lasname=...
router.get('/', (req, res) => {
    const { name } = req.query;
    if (!name) return res.json(getAllStudents());
    res.json(getStudentByName(name))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const student = getStudentById(id)
    if (!student) return res.status(404).send('Student not found')
    res.json(student)
})

router.post('/', (req, res) => {
    const { name, cohort } = req.body;
    const newStudent=addStudent(name, cohort);
    res.json(newStudent)
})

module.exports = router;