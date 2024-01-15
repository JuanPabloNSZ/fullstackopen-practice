const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      <p>{note.content}</p>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
