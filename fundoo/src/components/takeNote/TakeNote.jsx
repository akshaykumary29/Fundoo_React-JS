import { IconButton } from "@mui/material";
import React, { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { Icons } from "../icons/Icons";

import '../takeNote/TakeNote.scss'

function TakeNote() {
    const [isExpanded, setExpanded] = useState(false);

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
    function handleExpanded() {
        setExpanded(true);
    }
    
    return (
        <div>
            {isExpanded ?
                <div className='title-container' onClick={() => handleExpanded(true)}>
                    <div className='takenote' fullwidth>Take a note...</div>
                    {/* <div className='bar-icons'>
                        <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                        <div><BrushOutlinedIcon htmlColor="grey" /></div>
                        <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
                    </div> */}
                    <div className="titleIcon">
                        <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                        <IconButton> <BrushOutlinedIcon /> </IconButton>
                        <IconButton> <PhotoOutlinedIcon /> </IconButton>
                    </div>
                </div>
                :
                <div className='title'>
                    <div> <TextareaAutosize className='text-area' rows="1" cols="50" name="description" placeholder="Title">
                        
                    </TextareaAutosize></div>
                    <div> <textarea className='text-area' rows="5" cols="50" name="description" placeholder="Take a note...">
                        
                    </textarea></div>
                    <div><Icons /> <Button variant="text" onClick={() => handleExpanded(false)}>Close</Button></div>
                    
                    {/* <button onClick={() => handleExpanded(true)}>close</button> */}
                </div>
            }
        </div>

        

    );
}

export default TakeNote;