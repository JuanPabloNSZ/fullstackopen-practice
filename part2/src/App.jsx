import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((x) => setNotes(x.data));
  }, []);

  // Event handlers
  const addNote = (event) => {
    // event.preventDefault() evita que la página se actualice al enviar el formulario
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const showImportant = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((x) => x.important === true);

  //* Importante: Esta función permite modificar la propiedad de un objeto y guardar los cambios en el servidor
  const toggleImportance = (id) => {
    return () => {
      // Almacena la nota según el id recibido
      const selectedNote = notes.find((x) => x.id === id);
      // Crea un objeto con la copia de las propiedades y modifica la propiedad deseada
      // Es necesario crear un nuevo objeto porque no podemos mutar directamente un estado
      const noteObject = {
        ...selectedNote,
        important: !selectedNote.important,
      };
      // Usando axios agrega ese nuevo objeto en el lugar del objeto anterior
      axios
        .put(`http://localhost:3001/notes/${id}`, noteObject)
        .then((response) => {
          // En el arreglo de notas almacenamos una copia de todas las notas junto con la nota modificada, según la siguiente lógica:
          // Si el id recibido coincide con el id de alguna nota, se reemplaza esa nota con los datos recibidos desde el servidor
          // Si el id recidido no coincide, simplemente copia el elemento original
          setNotes(notes.map((x) => (x.id === id ? response.data : x)));
        });
    };
  };

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <button onClick={showImportant}>
        Show {showAll ? "important" : "all"} notes
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={toggleImportance(note.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
