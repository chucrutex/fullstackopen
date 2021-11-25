import React from "react";

const Total = ({ course }) => {
    let initialValue = 0;
    let sum = course.parts.reduce((accumulator, part) => accumulator + part.exercises, initialValue);
    console.log("%cConteúdo da variável course", "color: #007acc;", course);
    console.log("%cConteúdo da variável sum", "color: #007acc;", sum);
    return (<p>
        <b>total of {sum} exercises</b>
    </p>);
};

export default Total;