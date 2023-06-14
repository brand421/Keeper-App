import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState();

  return (
    <div>
      <Heading />
      <CreateArea />
      <div>
        {note.map((noteItem, index) => (
          <Note key={index} id={index} title={title} content={content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
