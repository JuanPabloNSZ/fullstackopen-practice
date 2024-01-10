import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    // event.preventDefault() evita que la página se actualice al enviar el formulario
    event.preventDefault();

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <ul>
        {notes.map((x) => (
          <Note key={x.id} content={x.content} />
        ))}
      </ul>
    </div>
  );
};

export default App;
