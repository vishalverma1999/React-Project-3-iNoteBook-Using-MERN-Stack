import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    // Abhi filhall ke liye notes ko hardcode kar diya hai par baad mein hum api se fetch karenge
    const notesInitial =  [
        {
          "_id": "6177c9ee7734a3d5cfc6972b",
          "user": "6176e0e35dedad627e4cb425",
          "title": "UPDATED!! JUPITER",
          "description": "UPDATED!! MARS IS WHAT",
          "tag": "OK GOT THAT",
          "dtae": "2021-10-26T09:27:10.492Z",
          "__v": 0
        },
        {
          "_id": "6177c9ef7734a3d5cfc6972d",
          "user": "6176e0e35dedad627e4cb425",
          "title": "Get to Work",
          "description": "Channelize your energy",
          "tag": "Personal nut IMPORTANT",
          "dtae": "2021-10-26T09:27:11.230Z",
          "__v": 0
        },
        {
          "_id": "6177c9ef7734a3d5cfc6972f",
          "user": "6176e0e35dedad627e4cb425",
          "title": "Get to Work",
          "description": "Channelize your energy",
          "tag": "Personal nut IMPORTANT",
          "dtae": "2021-10-26T09:27:11.789Z",
          "__v": 0
        },
        {
          "_id": "6177c9f07734a3d5cfc69731",
          "user": "6176e0e35dedad627e4cb425",
          "title": "Get to Work",
          "description": "Channelize your energy",
          "tag": "Personal nut IMPORTANT",
          "dtae": "2021-10-26T09:27:12.120Z",
          "__v": 0
        },
        {
          "_id": "6177c9f07734a3d5cfc69733",
          "user": "6176e0e35dedad627e4cb425",
          "title": "Get to Work",
          "description": "Channelize your energy",
          "tag": "Personal nut IMPORTANT",
          "dtae": "2021-10-26T09:27:12.361Z",
          "__v": 0
        }
      ]

      const [notes, setnotes] = useState(notesInitial);  // notes state

    return (
        <noteContext.Provider  value = {{notes:notes,setnotes:setnotes}}>   
           {props.children}      
        </noteContext.Provider>
    )
}

export default NoteState;