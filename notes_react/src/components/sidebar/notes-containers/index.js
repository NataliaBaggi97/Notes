import { useContext } from "react";
import { NotesContext } from "../../../App";
import Note from "../note";
import "./style.css"



function NotesContainer(){

    //NOT GOOD :
    // const notes = useContext(NotesContext)
    //GOOD :
      const { notes } = useContext(NotesContext)

    return(
        <div className="notes-container">
            <h2>Notes</h2>
            <div className="notes-list">
                {notes.map(note => <Note note={note} key={note.id}/>)}
            </div>
        </div>
    );
}

export default NotesContainer;