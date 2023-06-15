import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Heading />
      <CreateArea />
      <Note key={1} title="Note Title" content="Note Content" />
      <Footer />
    </div>
  );
}

export default App;
