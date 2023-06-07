import { Component } from "react";
import {
  genStudentData,
  getGradeHighlightColor,
  avgGradesFromStudentsData,
} from "./utils";

class GradesTable extends Component {
  constructor(props) {
    super(props);
    this.studentsData = genStudentData();
    this.average = avgGradesFromStudentsData(this.studentsData);
  }
  render() {
    return (
      <div>
        <table>
          <HeaderRow />
          <StudentRows studentsData={this.studentsData} />
          <AverageRow average={this.average} />
        </table>
      </div>
    );
  }
}

class HeaderRow extends Component {
  render() {
    return (
      <tr>
        <th>name</th>
        <th>grade</th>
      </tr>
    );
  }
}

class StudentRow extends Component {
  render() {
    const { name, grade } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <GradeCell grade={grade} />
      </tr>
    );
  }
}

class StudentRows extends Component {
  render() {
    return this.genStudentRows(this.props.studentsData);
  }
  genStudentRows(studentsData) {
    let _studentRows = [];
    for (let studentData of studentsData) {
      _studentRows.push(
        <StudentRow name={studentData.name} grade={studentData.grade} />
      );
    }
    return _studentRows;
  }
}

class AverageRow extends Component {
  render() {
    return (
      <tr>
        <td>Average</td>
        <GradeCell grade={this.props.average} />
      </tr>
    );
  }
}

class GradeCell extends Component {
  render() {
    const color = getGradeHighlightColor(this.props.grade);
    return <td style={{ color: color }}>{this.props.grade}</td>;
  }
}

export default GradesTable;
