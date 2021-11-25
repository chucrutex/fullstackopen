import React from "react";

const App = (props) => {

  const { notes } = props;

  console.log("%cApp.js line:7 notes", "color: #007acc;", notes);
  let result = notes.map(note => note.content);
  console.log("%cApp.js line:9 result", "color: #007acc;", result);

  let resultHTML = (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>)}
      </ul>
    </div>
  );

  return resultHTML;

};

export default App;