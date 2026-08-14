// This file simulates a database for the application. It contains functions to fetch, add, update, and delete student records and results.

const students = [
    { id: 1, name: "John Doe", results: { math: 85, science: 90 } },
    { id: 2, name: "Jane Smith", results: { math: 78, science: 88 } },
    { id: 3, name: "Emily Johnson", results: { math: 92, science: 95 } },
];

const fetchStudents = () => {
    return students;
};

const addStudent = (student) => {
    students.push({ id: students.length + 1, ...student });
};

const updateStudent = (id, updatedInfo) => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    }
};

const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
};

const fetchResults = (id) => {
    const student = students.find(student => student.id === id);
    return student ? student.results : null;
};

const updateResults = (id, newResults) => {
    const student = students.find(student => student.id === id);
    if (student) {
        student.results = { ...student.results, ...newResults };
    }
};

export { fetchStudents, addStudent, updateStudent, deleteStudent, fetchResults, updateResults };