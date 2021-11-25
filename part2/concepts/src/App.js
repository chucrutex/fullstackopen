import React from "react";
import Note from "./components/Note";

const App = ({ notes }) => {

  let resultHTML = (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
    </div>
  );

  return resultHTML;

};

export default App;