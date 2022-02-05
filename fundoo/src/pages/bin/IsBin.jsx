import React from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteServices from "../../services/NoteServices";

function IsBin() {
    const [notesarray, setNotesarray] = React.useState([])
    
    React.useEffect(() => {
        getisDeletedNotes();
    }, [])

    const getisDeletedNotes = () => {
        NoteServices.getisDeleted()
            .then((res) => {
                let filteredData = res.data.data.filter(data => data.isArchived !== true && data.isDeleted == true)
                setNotesarray(filteredData)
            })
            .catch((err) => {

            })
    }

    return (
        <>
            {/* <div> */}
                <DisplayNote noteArr={notesarray} getnote={getisDeletedNotes} />
            {/* </div> */}
        </>
    );
}

export default IsBin;