import "./layout.css";
import Link from "next/link";

export default function Lessons({ children }) {
  const lessonsObjList = [
    { lessonNum: "1", lessonNickName: "Grades" },
    { lessonNum: "2", lessonNickName: "Click Me" },
    { lessonNum: "3", lessonNickName: "Key Change" },
    { lessonNum: "4", lessonNickName: "Table With Form" },
    { lessonNum: "5", lessonNickName: "!TODO: MAYBE!" },
    { lessonNum: "6", lessonNickName: "HotelsInfo" },
  ];

  const lessonsCompList = lessonsObjList.map(
    ({ lessonNum, lessonNickName }) => (
      <LessonLink
        key={lessonNum}
        lessonNum={lessonNum}
        lessonNickName={lessonNickName}
      />
    )
  );
  return (
    <div className="App">
      <nav>
        <h2> nav </h2> <hr />
        {lessonsCompList.reverse()}
      </nav>
      <main autoFocus={true} role="main">
        {children}
      </main>
    </div>
  );
}

function LessonLink({ lessonNum, lessonNickName }) {
  return (
    <>
      <p>Lesson {lessonNum}:</p>
      <Link href={`/lessons/${lessonNum}`}>
        <p>{lessonNickName}</p>
      </Link>
      <hr />
    </>
  );
}
