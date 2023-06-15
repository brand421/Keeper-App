import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addNote(newNote) {
    setNote((previousItems) => {
      return [...previousItems, newNote];
    });
  }

  function deleteItem(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            onClicked={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
