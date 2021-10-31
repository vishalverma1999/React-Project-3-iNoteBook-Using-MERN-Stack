import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem';
import AddNote from './AddNote'
import noteContext from '../context/notes/noteContext'

const Notes = () => {
    const context = useContext(noteContext);   /// context API ka use
    const {notes, getAllNotes} = context;   // destructuring the context and pulling out notes and setnotes
    useEffect(() => {
        getAllNotes();
    }, [])
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((noteElement) => {   // looping through the notes state containing notesInitial Array
                    return <NoteItem key={noteElement._id} notes={noteElement} />
                })}
            </div>
        </>
    )
}

export default Notes


