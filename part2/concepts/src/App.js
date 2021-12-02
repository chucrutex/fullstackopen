import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note");

  const addNote = (event) => {

    // impede recarga da página no submit
    event.preventDefault();
    console.log("button clicked", event.target);

    // cria um objeto nota
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      // 50% de chances da nota ser criada como importante
      important: Math.random() < 0.5,
      id: notes.length + 1
    };

    // preenche o estado que representa as notas
    setNotes(notes.concat(noteObject));

    // limpa o campo de nota nova
    setNewNote("");

  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  let resultHTML = (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>);

  return resultHTML;

};

export default App;