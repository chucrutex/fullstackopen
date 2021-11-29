import React from "react";

const Header = ({ course }) => {
    console.log("%cConteúdo da variável course", "color: #007acc;", course);
    return (<h2>{course.name}</h2>);
};

export default Header;