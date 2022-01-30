import React, { useState } from "react";
import { IconButton } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Icons } from "../icons/Icons";

import '../takeNote/TakeNote.scss'
import NoteServices from "../../services/NoteServices";

function TakeNote(props) {
    const [isExpanded, setExpanded] = useState(true);

    const [note, setNote] = useState({
        title: "",
        description: "",
        colour: "",
        isArchived: "",
        isDeleted: ""
    });

    const handleChange = (e) => {
        setNote((prevvalue) => {
            return {
                ...prevvalue, [e.target.name]: e.target.value
            };
        })
        console.log(note);
    }

    const close = () => {
        let data = {
            "title": note.title,
            "description": note.description,
            "colour": note.colour,
            "isArchived": false,
            "isDeleted": false
        }
        setExpanded(true)
        NoteServices.addNotes(data)
            .then((res) => {
                props.getnote();
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="main">
            {isExpanded ?
                <div className='title-container' onClick={() => setExpanded(false)} >
                    <div className='takenote'>Take a note...</div>
                    <div className="titleIcon">
                        <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                        <IconButton> <BrushOutlinedIcon /> </IconButton>
                        <IconButton> <PhotoOutlinedIcon /> </IconButton>
                    </div>
                </div>
                :
                <div className='title'>
                    <div> <InputBase className="titleName" name="title" placeholder="Title" fullWidth multiline onChange={(e) => handleChange(e)}></InputBase>

                    </div>
                    <div> <InputBase className="noteInput" name="description" placeholder="Take a note..." fullWidth multiline autoFocus onChange={(e) => handleChange(e)}></InputBase></div>
                    <div className="icon-btn"><Icons className="icon" />
                        <span className="btn"><Button variant="text" onClick={() => close()}>Close</Button></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default TakeNote;