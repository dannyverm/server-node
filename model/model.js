const students = [
    { id: 1, name: 'Daniel' },
    { id: 2, name: 'Cynthia' },
    { id: 3, name: 'Danilo' }

]

module.exports = {
    getAllStudents: function () {
        return students;
    },

    getStudentById: function (id) {
        const student = students.find(s => s.id === Number(id));
        return student
    },
    getStudentByName: function (name) {
        return students.filter( s => s.name.toLowerCase().includes(name.toLowerCase()));
    }
}