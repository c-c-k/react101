"use client";
import "./page.css";
import {useState} from "react";
import GradesTable from "./lessons/1/components/GradesTable.jsx";
import ClickMe from "./lessons/2/components/ClickMe.jsx";
import KeyChange from "./lessons/3/components/KeyChange.jsx";

export default function Home() {
  const [lesson, setLesson] = useState(<KeyChange />);
  const setLesson1 = () => setLesson(<GradesTable />);
  const setLesson2 = () => setLesson(<ClickMe />);
  const setLesson3 = () => setLesson(<KeyChange />);
  return (
    <div className="App">
        <nav>
          <h2> nav </h2> <hr />
          <button type="submit" onClick={setLesson1}>
            Lesson 1: grades
          </button>
          <button type="submit" onClick={setLesson2}>
            Lesson 2: Click Me
          </button>
          <button type="submit" onClick={setLesson3}>
            Lesson 3: Key Change
          </button>
        </nav>
        <main autoFocus={true} role="main">
          {lesson}
        </main>
    </div>
  );
}
