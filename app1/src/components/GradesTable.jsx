// import React, {useState} from "react"
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
          <ClickCountButtonOnClickBind init_clicks={5} />
          <ClickCountConstructorBind init_clicks={5} />
          <ClickCountButtonArrowFunction init_clicks={5} />
          <ClickCountClickArrowFunction init_clicks={5} />
          <ClickCountAccountForReactRepeatProtection init_clicks={5} />
          <StudentRows studentsData={this.studentsData} />
          <AverageRow average={this.average} />
        </table>
      </div>
    );
  }
}

class ClickCountButtonOnClickBind extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick.bind(this)}>
            Click me (button on click bind)
          </button>
        </td>
        <td>num reloads: {this.state.num_clicks}</td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountConstructorBind extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
    this.addClick = this.addClick.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick}>
            Click me (constructor bind)
          </button>
        </td>
        <td>num reloads: {this.state.num_clicks}</td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountButtonArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={() => this.addClick()}>
            Click me (button arrow function)
          </button>
        </td>
        <td>num reloads: {this.state.num_clicks}</td>
      </tr>
    );
  }
  addClick() {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  }
}

class ClickCountClickArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClick}>
            Click me (click arrow function)
          </button>
        </td>
        <td>num reloads: {this.state.num_clicks}</td>
      </tr>
    );
  }
  addClick = () => {
    this.setState({ num_clicks: this.state.num_clicks + 1 });
  };
}

class ClickCountAccountForReactRepeatProtection extends Component {
  constructor(props) {
    super(props);
    this.state = { num_clicks: props.init_clicks };
    this.addClickX5 = this.addClickX5.bind(this);
  }
  render() {
    return (
      <tr>
        <td>
          <button type="submit" onClick={this.addClickX5}>
            Click x 5 (account for react counter repeat protection)
          </button>
        </td>
        <td>num reloads: {this.state.num_clicks}</td>
      </tr>
    );
  }
  addClick() {
    this.setState((prevState) => ({ num_clicks: prevState.num_clicks + 1 }));
  }
  addClickX5() {
    this.addClick();
    this.addClick();
    this.addClick();
    this.addClick();
    this.addClick();
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
