"use client";
import "./page.css";
import { useState } from "react";
import GradesTable from "./lessons/1/components/GradesTable.jsx";
import ClickMe from "./lessons/2/components/ClickMe.jsx";
import KeyChange from "./lessons/3/components/KeyChange.jsx";
import TableWithForm from "./lessons/4/components/TableWithForm.jsx";
// import Temp from "./lessons/5/components/Temp.jsx";
import HotelsInfo from "./lessons/6/components/HotelsInfo.jsx";

export default function Home() {
  const [lesson, setLesson] = useState(<HotelsInfo />);
  return (
    <div className="App">
      <nav>
        <h2> nav </h2> <hr />
        <button type="submit" onClick={() => setLesson(<GradesTable />)}>
          <p>Lesson 1:</p> <p>grades</p>
        </button>
        <button type="submit" onClick={() => setLesson(<ClickMe />)}>
          <p>Lesson 2:</p> <p>Click Me</p>
        </button>
        <button type="submit" onClick={() => setLesson(<KeyChange />)}>
          <p>Lesson 3:</p> <p>Key Change</p>
        </button>
        <button type="submit" onClick={() => setLesson(<TableWithForm />)}>
          <p>Lesson 4:</p> <p>Table With Form</p>
        </button>
        <button type="submit" onClick={() => setLesson(<HotelsInfo />)}>
          <p>Lesson 6:</p> <p>HotelsInfo</p>
        </button>
      </nav>
      <main autoFocus={true} role="main">
        {lesson}
      </main>
    </div>
  );
}
