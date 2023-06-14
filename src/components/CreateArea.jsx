import React, { useState } from "react";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState("");

  const [titleInput, setTitleInput] = useState("");

  function handleTitleChange(e) {
    const newValue = e.target.value;
    setTitleInput(newValue);
  }

  function handleNoteChange(e) {
    const newValue = e.target.value;
    setNoteInput(newValue);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitleChange}
          value={titleInput}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={3}
          onChange={handleNote}
          value={noteInput}
        />
        <button
          onClick={() => {
            props.onClickTitle(titleInput);
            props.onClickNote(noteInput);
            setTitleInput("");
            setNoteInput("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
