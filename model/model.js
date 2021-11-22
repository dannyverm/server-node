let nextId=4;
const students = [
    { id: 1, name: 'Daniel', cohort:'FT15b' },
    { id: 2, name: 'Cynthia', cohort:'FT17b' },
    { id: 3, name: 'Danilo', cohort:'FT15b' }

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
    },
    addStudent: function (name,cohort) {
      const newStudents={
            id: nextId,
            name,
            cohort
        };
        students.push(newStudents);
        nextId++;
        return newStudents;
    }
}