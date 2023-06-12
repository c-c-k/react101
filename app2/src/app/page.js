"use client";
import "./page.css";
import { useState } from "react";
import GradesTable from "./lessons/1/components/GradesTable.jsx";
import ClickMe from "./lessons/2/components/ClickMe.jsx";
import KeyChange from "./lessons/3/components/KeyChange.jsx";
import TableWithForm from "./lessons/4/components/TableWithForm.jsx";
import Temp from "./lessons/5/components/Temp.jsx";

export default function Home() {
  const [lesson, setLesson] = useState(<Temp />);
  const setLesson1 = () => setLesson(<GradesTable />);
  const setLesson2 = () => setLesson(<ClickMe />);
  const setLesson3 = () => setLesson(<KeyChange />);
  const setLesson4 = () => setLesson(<TableWithForm />);
  const setLesson5 = () => setLesson(<Temp />);
  return (
    <div className="App">
      <nav>
        <h2> nav </h2> <hr />
        <button type="submit" onClick={setLesson1}>
          <p>Lesson 1:</p> <p>grades</p>
        </button>
        <button type="submit" onClick={setLesson2}>
          <p>Lesson 2:</p> <p>Click Me</p>
        </button>
        <button type="submit" onClick={setLesson3}>
          <p>Lesson 3:</p> <p>Key Change</p>
        </button>
        <button type="submit" onClick={setLesson4}>
          <p>Lesson 4:</p> <p>Table With Form</p>
        </button>
        <button type="submit" onClick={setLesson5}>
          <p>Lesson 5:</p> <p>Temp</p>
        </button>
      </nav>
      <main autoFocus={true} role="main">
        {lesson}
      </main>
    </div>
  );
}
