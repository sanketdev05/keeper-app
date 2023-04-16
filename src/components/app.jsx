import React, { useState } from "react";
import Heading from "./header";
import Footer from "./footer";
import Notes from "./notes";
// import notes from "../notes";
import CreateNote from "./createNote";



function App() {
    
    const [notes, setNotes] = useState([{}]);

    function addNote(newNote){
        setNotes((prevNotes)=>{
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Heading/>
            <CreateNote onAdd ={addNote} />
            {notes.map((noteItem, index) =>{
                return (
                    <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
                );
            })}
            <Footer/>
        </div>
    );
}

export default App;