import React, { useState } from "react";
import TakeNote from "../../components/takeNote/TakeNote";
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteServices from "../../services/NoteServices";

import './Notes.scss'

function Notes() {

    const [noteArr, setnoteArr] = useState([])


    React.useEffect(() => {
        getAllNotes();
    }, [])

    const getAllNotes = () => {
        NoteServices.getNotes()
            .then((res) => {
                let filteredData = res.data.data.filter(data => data.isArchived !== true && data.isDeleted !== true)
                setnoteArr(filteredData)
            })
            .catch((err) => {
                console.log("Error= " + err);
            })
    }

    return <div className="note-container">
        <div><TakeNote getnote={getAllNotes} /></div>
        <div className="notes-box"> <DisplayNote noteArr={noteArr} getnote={getAllNotes} /> </div>
    </div>;

}

export default Notes;