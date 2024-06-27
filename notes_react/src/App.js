import { createContext, useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import NotesContainer from "./components/sidebar/notes-containers";


export const NotesContext = createContext({ 
  saveNote: () => {},
  deleteNote: () => {},
});


function App() {

  const [notes, setNotes] = useState(() => {
    const notes = localStorage.getItem("notes-data");
    if(notes){
      return JSON.parse(notes);
    }
    return [];
  });

  const addNote = (color) => {
    setNotes([
      {
        id: Math.random().toString(36),
        text: "",
        theme : color,
        timestamp: +new Date(),
        editmode: true,
      },
      ...notes
    ]);
  };

  const deleteNote = (noteId) => {
    setNotes(
      notes.filter(note => note.id !== noteId)
    )
  };

 /*  const saveNote = (noteId, text) => {
    let note = notes.find(note => note.id === noteId)
    note.text = text;
    note.editmode = false;   
    setNotes=([...notes]);
  }; */

  const saveNote = (noteId, text) => {
    // Find the note by noteId
    const updatedNotes = notes.map(note => {
        if (note.id === noteId) {
            // Create a new object to update the note's text and editmode
            return {
                ...note,
                text: text,
                editmode: false
            };
        }
        return note; // Return unchanged note objects
    });

    // Update state using setNotes with the updatedNotes array
    setNotes(updatedNotes);
};

  

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes])


  const value = {
    notes,
    addNote,
    deleteNote,
    saveNote,
  };

  return (
    <NotesContext.Provider value={value}>
    <div className="notes-app">
     <Sidebar/>
     <NotesContainer />
    </div>
    </NotesContext.Provider>
  );
}

export default App;
