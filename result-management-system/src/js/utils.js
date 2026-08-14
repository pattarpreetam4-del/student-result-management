function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function calculateAverage(grades) {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    return (total / grades.length) || 0;
}

function formatGrade(grade) {
    return grade.toFixed(2);
}

export { formatDate, validateEmail, calculateAverage, formatGrade };