import React from "react";
import Course from "./components/Course";

const App = ({ courses }) => {

  console.log("%cConteúdo da variável courses", "color: #007acc;", courses);
  let result = <div>
    <h1>Web development curriculum</h1>
    {courses.map((course) => <Course key={course.id} course={course} />)}
  </div>;
  console.log("%cConteúdo da variável result", "color: #007acc;", result);

  return result;

};

export default App;