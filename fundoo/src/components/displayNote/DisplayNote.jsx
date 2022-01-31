import React, { useState } from "react";
import { Icons } from "../icons/Icons";
import '../displayNote/DisplayNote.scss'

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import NoteServices from "../../services/NoteServices";

function DisplayNote(props) {

    const [notes, setNotes] = useState({
        _id: "",
        title: "",
        description: "",
        isArchived: "",
        isDeleted: "",
        colour: props.noteArr
    })

    const changeColor = () => {
        props.getnote()
    }

    const changeArchive = (id) => {

        let data = {
            "_id": id,
            "isArchived": true
        }
        NoteServices.updateNotes(data)
            .then((res) => {
                props.getnote()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    if (props.noteArr) {
        return (
            <>
                {props.noteArr.map((item, index) => {
                    return <div className='mainDisplay'>
                        <div className='displayBox' style={{ backgroundColor: item.colour }}>
                            <div>
                                <div className='title1'>{item.title}</div>
                                <div className='title-desc'>{item.description}</div>
                            </div>
                            <div className='icons'><Icons mode="display" item={item} changeColor={changeColor} changeArchive={() => changeArchive(item._id)} /></div>
                        </div>
                    </div>
                })
                }
            </>
        )
    }
}

export default DisplayNote;