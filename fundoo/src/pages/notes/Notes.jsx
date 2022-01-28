import React, { useState } from "react";
import TakeNote from "../../components/takeNote/TakeNote";
import DisplayNote from "../../components/displayNote/DisplayNote";

export default function Notes() {

    const [noteArr, setnoteArr] = useState([])

    const getAllNotes = (data) => {
        NotesService.getnotes()
        .then((res) => {
            setnoteArr(res.data.data)
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log("Error= " + err);
        })
    }

    // const updateDisplayNote= () => {
    //     NotesService.getnotes()
    //     .then((res) => {
    //         setnoteArr(res.data.data)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }
return (
    <div>
        <TakeNote getnotes={getAllNotes} />
        <DisplayNote />
    </div>
)


}
