import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
    console.log("%cConteúdo da variável course", "color: #007acc;", course);
    return (<div>
        {course.parts.map((part) => <Part key={part.id} part={part} />)}
        <Total course={course} />
    </div>);
};

export default Content;