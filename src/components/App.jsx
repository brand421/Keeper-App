import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Heading />
            <Note key={1} title='Note title' content='Note Content' />
            <Footer />
        </div>
    )
}

export default App;