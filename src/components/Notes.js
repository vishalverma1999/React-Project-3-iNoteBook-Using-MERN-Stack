import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
 
 const Notes = () => {

    const context = useContext(noteContext);   /// context API ka use
    const {notes,setnotes} = context;   // destructuring the context and pulling out notes and setnotes

     return (
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((noteElement)=>{   // looping through the notes state containing notesInitial Array
            return  <NoteItem key={noteElement._id}notes={noteElement} /> 
        })}
    </div>
     )
 }
 
 export default Notes
 

