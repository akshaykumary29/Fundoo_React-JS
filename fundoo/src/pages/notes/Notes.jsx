import React, { useState } from "react";
import TakeNote from "../../components/takeNote/TakeNote";
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteServices from "../../services/NoteServices";

function Notes() {

    const [noteArr, setnoteArr] = useState([])


    React.useEffect(() => {
        getAllNotes();
    }, [])

    const getAllNotes = () => {
        NoteServices.getNotes()
            .then((res) => {
                setnoteArr(res.data.data)
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log("Error= " + err);
            })
    }

    return <div>
        <TakeNote getnote={getAllNotes} />
        <DisplayNote noteArr={noteArr} />
    </div>;
}

export default Notes;




// const updateDiplayNote= () => {
    //     NoteServices.getNotes()
    //     .then((res) => {
    //         setnoteArr(res.data.data)
    //         console.log(res.data.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }