export function genStudentData () {
    const numStudents = 20 + Math.round(Math.random() * 10);
    let studentsData = [];
    for ( let studentNum = 1; studentNum <= numStudents; studentNum++ ) {
        let grade =  30 + Math.round(Math.random() * 70);
        let studentData = {
            "name": `student_${studentNum}`,
            "grade": grade
        }
        studentsData.push(studentData);
    }
    return studentsData
}

export function avgGradesFromStudentsData(studentsData) {
    let sum = 0;
    for (let studentData of studentsData) {
        sum += studentData.grade;
    }
    return Math.round(sum / studentsData.length);
}

export function getGradeHighlightColor(grade) {
    let highlightColor;
    if (grade >= 55) {
        highlightColor = "green";
    } else {
        highlightColor = "red";
    }
    return highlightColor;
}
