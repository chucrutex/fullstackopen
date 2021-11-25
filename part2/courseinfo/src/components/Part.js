import React from "react";

const Part = (props) => {

    let { part } = props;
    console.log("%cConteúdo da variável part", "color: #007acc;", part);
    return (<p>
        {part.name} {part.exercises}
    </p>);
};

export default Part;