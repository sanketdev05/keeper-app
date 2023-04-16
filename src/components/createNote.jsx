import React, {useState} from 'react';

function CreateNote(props) {
    const [newNote, setNewNote] = useState([
        {
            title:"",
            content:""
        }
    ]);

    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote((prevValues) =>{
        return {
            ...prevValues,
            [name]:value
        }}
        );
    }

    function createNote(event) {
        props.onAdd(newNote)
        setNewNote(
            {
                title:"",
                content:""
            }
        )
        event.preventDefault();
    }

    return (
        <div>
            <form >
                <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newNote.title}
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    rows="3"
                    placeholder="Take a note... "
                    value={newNote.content}>
                </textarea>
                <button onClick= { createNote }> Add </button>
            </form>
        </div>
    );
}

export default CreateNote;