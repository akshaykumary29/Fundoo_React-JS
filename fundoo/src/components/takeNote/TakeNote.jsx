import { IconButton } from "@mui/material";
import React, { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'; 
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Icons } from "../icons/Icons";

import '../takeNote/TakeNote.scss'

function TakeNote() {
    const [isExpanded, setExpanded] = useState(true);

    // const [note, setNote] = useState({
    //     title: "",
    //     content: "",
    // });

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setNote(() => {
    //         return {
    //             [name]: value,
    //         };
    //     })
    // }
    // function handleExpanded() {
    //     setExpanded(true);
    // }

    return (
        <div className="main">
            {isExpanded ?
                <div className='title-container' onClick={() => setExpanded(false)}>
                    <div className='takenote'>Take a note...</div>
                    <div className="titleIcon">
                        <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                        <IconButton> <BrushOutlinedIcon /> </IconButton>
                        <IconButton> <PhotoOutlinedIcon /> </IconButton>
                    </div>
                </div>
                :
                <div className='title'>
                    <div> <InputBase className="titleName" placeholder="Title" fullWidth multiline></InputBase>

                    </div>
                    <div> <InputBase className="noteInput" placeholder="Take a note..." fullWidth multiline></InputBase></div>
                    <div ><Icons />
                        <span className="btn"><Button variant="text" onClick={() => setExpanded(true)}>Close</Button></span>
                    </div>


                </div>
            }
        </div>



    );
}

export default TakeNote;