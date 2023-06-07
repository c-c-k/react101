// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import GradesTable from "./lessons/1/components/GradesTable.jsx";
import ClickMe from "./lessons/2/components/ClickMe.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { main_component: "" };
  }
  setLesson1 = () => this.setState({ main_component: <GradesTable /> });
  setLesson2 = () => this.setState({ main_component: <ClickMe /> });
  render() {
    return (
      <div className="App">
        <nav>
          <h2> nav </h2> <hr />
          <button type="submit" onClick={this.setLesson1}>
            Lesson 1: grades
          </button>
          <button type="submit" onClick={this.setLesson2}>
            Lesson 2: Click Me
          </button>
        </nav>
        <main autoFocus="true" role="main">
          {this.state.main_component}
        </main>
      </div>
    );
  }
}

export default App;
