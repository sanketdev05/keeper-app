import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={<DeleteIcon />}
      ></Button>
    </div>
  );
}

export default Notes;
