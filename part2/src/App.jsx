import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((x) => {
      console.log("promise fulfilled");
      setNotes(x.data);
    });
  }, []);

  // Event handlers
  const addNote = (event) => {
    // event.preventDefault() evita que la página se actualice al enviar el formulario
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleToggleImportance = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((x) => x.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <button onClick={handleToggleImportance}>
        Show {showAll ? "important" : "all"} notes
      </button>
      <ul>
        {notesToShow.map((x) => (
          <Note key={x.id} content={x.content} />
        ))}
      </ul>
    </div>
  );
};

export default App;
