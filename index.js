const express = require('express')
const server = express()
const port = 3000
const studentRouter = require('./routes/students')


//da un error al enviar un post si no agregamos esta linea pero tambien se puede agregar dentro del post
server.use(express.json());

server.use('/students',studentRouter);

server.get('/', (req, res) => {
    res.send('Hello World Soy Henry!')
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})