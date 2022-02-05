import React from "react";
import DisplayNote from "../../components/displayNote/DisplayNote";
import NoteServices from "../../services/NoteServices";

function Archive() {
    const [notesarray, setNotesarray] = React.useState([])

    React.useEffect(() => {
        getArchivedNotes();
    }, [])

    const getArchivedNotes = () => {
        NoteServices.getisArchived()
            .then((res) => {
                let filteredData = res.data.data.filter(data => data.isArchived == true && data.isDeleted !== true)
                setNotesarray(filteredData)
            })
            .catch((err) => {

            })
    }

    return (
        <>
            {/* <div> */}
                <DisplayNote noteArr={notesarray} getnote={getArchivedNotes} />
            {/* </div> */}
        </>
    );
}

export default Archive;