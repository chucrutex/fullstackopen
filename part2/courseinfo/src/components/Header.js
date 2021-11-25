import React from "react";

const Header = ({ course }) => {
    console.log("%cConteúdo da variável course", "color: #007acc;", course);
    return (<h1>{course.name}</h1>);
};

export default Header;