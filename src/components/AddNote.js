import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {

    const [note, setnote] = useState({ title: "", description: "", tag: "default" })

    const context = useContext(noteContext);   /// context API ka use
    const { addNote } = context;   // destructuring the context and pulling out notes and setnotes

    const handleSubmitClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });   // special syntax hai:)--->  '...' is spread operator
        //   jo bhi values note object ke andar hai wo rahe lekin jo properties comma ke baad likhi jaa rahi hai inko add ya overwrite kar dena
        //  [e.target.name]: e.target.value --> Jo bhi targeted event change ho raha hai(yaha name attribute hai input element ka) us targeted event ki jo value hai(title ke case mein name ki default value title hai and description in other one) wo uske barabar ho jaye jo bhi value/text usme enter kiya jaayega
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} /> {/*name attribute add kiya hai input mein 
                The name attribute specifies the name of an <input> element.
                The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.
                Note: Only form elements with a name attribute will have their values passed when submitting a form.
                */}
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />   {/*name attribute add kiya hai input mein */}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick} >Submit</button>
            </form>
        </div>
    )
}

export default AddNote
