import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
  const [isexpanded, setIsexpanded] = useState(false);

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function createNote(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleClick() {
    setIsexpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isexpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={newNote.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={newNote.content}
          placeholder="Take a note..."
          rows={isexpanded ? 3 : 1}
        />

        <Zoom in={isexpanded}>
          <Fab onClick={createNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
