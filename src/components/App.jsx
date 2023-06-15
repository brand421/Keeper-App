import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  const [noteTitle, setNoteTitle] = useState([]);

  function addNoteItem(inputNote) {
    setNote((previousItems) => {
      return [...previousItems, inputNote];
    });
  }

  function addTitleItem(inputTitle) {
    setNoteTitle((previousItems) => {
      return [...previousItems, inputTitle];
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea noteInput={addNoteItem} titleInput={addTitleItem} />
      <div>
        {note.map((noteItem, index) => (
          <Note key={index} id={index} title={noteTitle} content={content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
