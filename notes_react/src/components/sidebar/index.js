import { useContext, useState } from "react";
import { NotesContext } from "../../App";
import "./style.css"

const colors = [
    "#FFB28B",
    "#D4EFDF",
    "#D2B4DE",
    "#D5DBDB",
    "#F7DC6F",
]

function Sidebar() {

    const {addNote} = useContext(NotesContext);

    const [selectedTheme, setSelectedTheme] = useState(colors[0])

    return(
        <div className="sidebar">
            <button className="add-note-btn" onClick={() =>addNote(selectedTheme)}>
                <i className="fa fa-plus"></i>
            </button>
            <div className="color-input-list">
                {colors.map(color => (
                    <div className="color-input">
                        <button
                        type="radio"
                        name="color-input"
                        value={color}
                        id={"color"+color}
                        cheked={selectedTheme === color}
                        onClick={() => setSelectedTheme(color)}
                        >
                        <label htmlFor={"color-"+color} style={{
                            background: color
                        }}></label>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  
  export default Sidebar;