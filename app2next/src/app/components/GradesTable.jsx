// import React, {useState} from "react"
import { genStudentData, getGradeHighlightColor, avgGradesFromStudentsData } from "./utils";

function GradesTable() {
      const studentsData = genStudentData();
    const average = avgGradesFromStudentsData(studentsData);
  return (
    <div>
      <table>
        <HeaderRow />
        {studentRows (studentsData)}
        <AverageRow average={average} />
      </table>
    </div>
  );
}

const HeaderRow = () => {
  return (
        <tr>
          <th>name</th>
          <th>grade</th>
        </tr>
  );
};

const StudentRow = (props) => {
  const { name, grade } = props;
  return (
    <tr>
      <td>{name}</td>
      <GradeCell grade={grade} />
    </tr>
  );
};

const studentRows = (studentsData) => {
  let _studentRows = []
      for (let studentData of studentsData) {
        _studentRows.push(
            <StudentRow name={studentData.name} grade={studentData.grade} />);
      }
  return _studentRows;
};

const AverageRow = (props) => {
  return (
    <tr>
      <td>Average</td>
      <GradeCell grade={props.average} />
    </tr>
  );
};

const GradeCell = (props) => {
    const color = getGradeHighlightColor(props.grade)
  return <td style={{ color: color }}>{props.grade}</td>;
};

export default GradesTable;
