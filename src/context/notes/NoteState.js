import noteContext from "./noteContext";
import { useState } from "react";

// Standard Syntax Below:-
// const NoteState = (props)=>{
    // Example-1 Without combining states and context
//     const state = {
//         name: "Vishal",
//         class: "5b"
//     }
//     return (
//         <noteContext.Provider  value = {state}>
//            {props.children}      
//         </noteContext.Provider>
//     )
// }



const NoteState = (props)=>{
    // Example-2 With combining states and context
    const s1 = {
                name: "Vishal",
                class: "5b"
            }

    const [state, setstate] = useState(s1);
   
    const update = ()=>{
        setTimeout(() => {    
            setstate({
                name: "Tanny Tiddi",
            class: "10b"
            })
        }, 2000);
    }
    return (
        <noteContext.Provider  value = {{state:state, update:update}}>      {/* ek object banaya hai, and ek function bhi export kiya hai aur is function se hum apni state ko update kar sakte hai */}
           {props.children}      
        </noteContext.Provider>
    )
}

export default NoteState;