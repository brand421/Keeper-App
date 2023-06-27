import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpand, setExpand] = useState(false)
  const [note, setNote] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });

  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpand && (<input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />)}
        
        <textarea
          name="content"
          placeholder="Take a note..."
          onClick={expand}
          rows={isExpand ? 3 : 1}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isExpand}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
