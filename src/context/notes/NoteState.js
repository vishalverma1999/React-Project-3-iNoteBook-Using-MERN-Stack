import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = 'http://localhost:5000';
  // Abhi filhall ke liye notes ko hardcode kar diya hai par baad mein hum api se fetch karenge
  const notesInitial = []
  const [notes, setnotes] = useState(notesInitial);  // notes state

  // Get All Notes
  const getAllNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3NmUwZTM1ZGVkYWQ2MjdlNGNiNDI1In0sImlhdCI6MTYzNTQyMjE1MH0.gJJJl5rzNst3ZLxsQ1wT3NuHZ0vgCejWTyPQ4eZWImo'
      },
    });
    const json = await response.json();
    console.log(json);

    // notes state is updated by sending the response in setNotes
    setnotes(json);
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3NmUwZTM1ZGVkYWQ2MjdlNGNiNDI1In0sImlhdCI6MTYzNTE4MDc3MX0.VyzyCcuLx2xdvlb_3Qgp1A3MeaWfSA9sW__VQugFzok'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag
      })
    });
    const json = await response.json();
    console.log(json);

    console.log("Adding a New Note")
    const note = {
      "_id": "6177c9f07734a3d5cfc69733",
      "user": "6176e0e35dedad627e4cb425854",
      "title": title,
      "description": description,
      "tag": tag,
      "dtae": "2021-10-26T09:27:12.361Z",
      "__v": 0
    }
    setnotes(notes.concat(note));   // We used concat instead push because concat returns an array whereas push Updates an array
  }

  // Delete A note
  const deleteNote = async (id) => {

    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3NmUwZTM1ZGVkYWQ2MjdlNGNiNDI1In0sImlhdCI6MTYzNTQyMjE1MH0.gJJJl5rzNst3ZLxsQ1wT3NuHZ0vgCejWTyPQ4eZWImo'
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting Note With Id: " + id);
    const newNotes = notes.filter((notes) => { return notes._id !== id });
    setnotes(newNotes);
  }

  // Edit A note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3NmUwZTM1ZGVkYWQ2MjdlNGNiNDI1In0sImlhdCI6MTYzNTQyMjE1MH0.gJJJl5rzNst3ZLxsQ1wT3NuHZ0vgCejWTyPQ4eZWImo'
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag
      })
    });
    const json = await response.json();
    console.log(json);

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }

  }

  return (
    // {/* value = {{notes:notes,setnotes:setnotes}} ,object banakar jaisa value mein kar rakha hai, agar aap direct bhi naam likhdoge without making object to bhi kaam ho jayega according to modern javascript like, value = {{notes, setnotes}}*/}
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>    {/*Exporting values*/}
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;