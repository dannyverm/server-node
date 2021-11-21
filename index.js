const express = require('express')
const server = express()
const port = 3000

const {
    getAllStudents,
    getStudentById,
    getStudentByName
} = require('./model/model')

server.get('/', (req, res) => {
    res.send('Hello World Soy Henry!')
})

// query /students?name=leo&lasname=...
server.get('/students', (req, res) => {
    const { name } = req.query;
    if (!name) return res.json(getAllStudents());
    res.json(getStudentByName(name))
})

server.get('/students/:id', (req, res) => {
    const { id } = req.params;
    const student = getStudentById(id)
    if (!student) return res.status(404).send('Student not found')
    res.json(student)
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})