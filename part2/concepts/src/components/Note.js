import React from "react";

const Note = (props) => {

    console.log("%cNote.js line:5 note", "color: #007acc;", props.note);

    return (<li>{props.note.content}</li>);

};

export default Note;