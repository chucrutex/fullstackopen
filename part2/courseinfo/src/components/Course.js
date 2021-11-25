import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
    console.log("%cConteúdo da variável course", "color: #007acc;", course);
    return (<>
        <Header course={course} />
        <Content course={course} />
    </>);
};

export default Course;