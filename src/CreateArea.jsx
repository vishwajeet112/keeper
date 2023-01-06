import React, { useState } from 'react';

function CreateArea(props) {
    const [note, setnote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setnote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setnote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className='note'>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Content"
                    rows="6"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;